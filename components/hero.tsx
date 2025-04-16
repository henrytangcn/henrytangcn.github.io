"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const textElement = textRef.current
    if (!textElement) return

    const addGlowEffect = () => {
      textElement.classList.add("text-glow")
      setTimeout(() => {
        textElement.classList.remove("text-glow")
      }, 1500)
    }

    const interval = setInterval(addGlowEffect, 3000)
    addGlowEffect()

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 md:px-12">
      <div className="container mx-auto text-center">
        <div className="space-y-6 max-w-3xl mx-auto">
          <h1 ref={textRef} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            AI<span className="text-stellar-gold">星耀</span>之旅
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            记录我的人工智能学习旅程，分享知识、经验和见解。通过这个博客，我希望能够追踪自己的成长，并与志同道合的学习者建立联系。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button className="bg-stellar-gold hover:bg-stellar-gold/80 text-stellar-dark font-medium px-6 py-6 rounded-full">
              浏览最新文章
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="border-stellar-gold/50 text-stellar-gold hover:bg-stellar-gold/10 font-medium px-6 py-6 rounded-full"
            >
              学习资源
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
