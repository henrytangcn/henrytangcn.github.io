import { Star, MessageSquare, Brain, BoxIcon as Toolbox, Users } from "lucide-react"

const skills = [
  {
    name: "提示词工程",
    level: 4,
    icon: MessageSquare,
    description: "学习如何设计有效的提示词，以获得更精确、更有用的AI回应，提高与大语言模型交互的效率。",
  },
  {
    name: "大语言模型",
    level: 3,
    icon: Brain,
    description: "探索GPT、Claude等大语言模型的工作原理、能力边界和应用场景，了解如何更好地利用它们。",
  },
  {
    name: "AI工具箱",
    level: 4,
    icon: Toolbox,
    description: "收集和评估各种AI工具和平台，学习如何将它们整合到工作流程中，提高生产力和创造力。",
  },
  {
    name: "社会影响",
    level: 3,
    icon: Users,
    description: "思考AI技术对社会、就业和日常生活的影响，关注伦理问题和未来发展趋势。",
  },
]

export default function Skills() {
  return (
    <section className="py-20 px-6 md:px-12 bg-stellar-darker/50 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            学习<span className="text-stellar-gold">领域</span>
          </h2>
          <div className="w-20 h-1 bg-stellar-gold mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">我正在探索的AI领域和技术，不断学习和拓展知识边界。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="p-6 rounded-lg border border-stellar-gold/20 bg-stellar-dark/30 backdrop-blur-sm hover:border-stellar-gold/50 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-stellar-gold/10 flex items-center justify-center mr-4 group-hover:bg-stellar-gold/20 transition-all duration-300">
                  <skill.icon className="h-6 w-6 text-stellar-gold" />
                </div>
                <h3 className="text-xl font-bold">{skill.name}</h3>
              </div>
              <p className="text-gray-300 mb-4">{skill.description}</p>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < skill.level ? "text-stellar-gold fill-stellar-gold" : "text-gray-500"
                    } mr-1`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
