"use client"

import { useCallback } from "react"
import Particles from "@tsparticles/react"
import type { Engine } from "@tsparticles/engine"

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    // Engine is automatically initialized with basic particles
  }, [])

  return (
    <div className="absolute inset-0 z-0">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: false,
          },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: "#d4af37",
            },
            links: {
              color: "#d4af37",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                width: 800,
                height: 800,
              },
              value: 80,
            },
            opacity: {
              value: { min: 0.1, max: 0.3 },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
    </div>
  )
}
