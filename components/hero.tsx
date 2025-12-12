"use client"

import { ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance leading-relaxed">
          Hola! Soy Oriana Evelyn Intendente Monaldi
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          Ingeniera en 
          <br />
          <span className="text-primary">Sistemas de Información</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance leading-relaxed">
          Creo experiencias webs y funcionales con atención al detalle y pasión por el diseño
        </p>
        <button
          onClick={scrollToAbout}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          Conoce más
          <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  )
}
