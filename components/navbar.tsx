"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="w-full py-4 px-6 md:px-12 backdrop-blur-md bg-stellar-dark/30 border-b border-stellar-gold/20 fixed top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            <span className="text-stellar-gold">星</span>耀
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["首页", "学习笔记", "AI项目", "资源", "关于我"].map((item) => (
              <Link
                key={item}
                href={`/${item === "首页" ? "" : item}`}
                className="text-white hover:text-stellar-gold transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-stellar-gold group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-4 flex flex-col items-center backdrop-blur-md bg-stellar-dark/90 rounded-lg border border-stellar-gold/20">
            {["首页", "学习笔记", "AI项目", "资源", "关于我"].map((item) => (
              <Link
                key={item}
                href={`/${item === "首页" ? "" : item}`}
                className="text-white hover:text-stellar-gold transition-colors duration-300 w-full text-center py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
