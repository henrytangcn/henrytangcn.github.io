import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    id: 1,
    title: "AI基础概念解析",
    description: "探索人工智能的核心概念，从机器学习到深度学习的基础知识梳理。",
    image: "/celestial-cartography.png",
    link: "#",
  },
  {
    id: 2,
    title: "第一个AI驱动的个人项目",
    description: "记录我探索使用AI实现的首个能创造价值的副业项目，从构思到实现的全过程。",
    image: "/celestial-cartography.png",
    link: "#",
  },
  {
    id: 3,
    title: "AI工具使用指南",
    description: "分享各种实用的AI工具和平台，帮助初学者快速上手并提高学习效率。",
    image: "/stellar-connect.png",
    link: "#",
  },
]

export default function FeaturedProjects() {
  return (
    <section className="py-20 px-6 md:px-12" id="projects">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            精选<span className="text-stellar-gold">文章</span>
          </h2>
          <div className="w-20 h-1 bg-stellar-gold mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">探索我的AI学习笔记和项目，记录学习过程中的发现与思考。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-stellar-dark/50 border-stellar-gold/20 backdrop-blur-sm overflow-hidden group hover:border-stellar-gold/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stellar-dark to-transparent opacity-70"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-stellar-gold">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-flex items-center text-stellar-gold hover:text-white transition-colors"
                >
                  阅读全文 <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
