"use client"

import { Mail, Linkedin, Github, Send } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className=" mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Contactate conmigo </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:orimonaldi@gmail.com"
            className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground break-all">orimonaldi@gmail.com</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/oriana-intendente/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Linkedin className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <p className="text-sm text-muted-foreground">Conectemos profesionalmente</p>
            </div>
          </a>

          <a
            href="https://github.com/oriana-monaldi"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Github className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <p className="text-sm text-muted-foreground">Mirá mis proyectos</p>
            </div>
          </a>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 p-8 md:p-10">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Send className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Disponible para nuevos proyectos</h3>
              <p className="text-muted-foreground leading-relaxed">
                Actualmente me encuentro disponible para colaborar en proyectos que requieran desarrollo web o mobile.
                Si estás buscando incorporar nuevas funcionalidades, modernizar una aplicación existente o explorar
                propuestas tecnológicas, estaré encantada de conversar y evaluar cómo puedo contribuir.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
