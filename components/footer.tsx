import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 md:px-12 border-t border-stellar-gold/20 bg-stellar-dark/30 backdrop-blur-md">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">
              <span className="text-stellar-gold">AI</span>星耀
            </h2>
            <p className="text-gray-400 mt-2">记录AI学习之旅的个人博客</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-stellar-gold transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">Github</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-stellar-gold transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-stellar-gold transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-stellar-gold transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>

        <div className="border-t border-stellar-gold/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {currentYear} AI星耀博客. 保留所有权利.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-stellar-gold text-sm transition-colors">
              隐私政策
            </a>
            <a href="#" className="text-gray-400 hover:text-stellar-gold text-sm transition-colors">
              使用条款
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
