import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import FeaturedProjects from "@/components/featured-projects"
import Skills from "@/components/skills"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-stellar-dark to-stellar-darker text-white relative overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <FeaturedProjects />
        <Skills />
        <Footer />
      </div>
    </main>
  )
}
