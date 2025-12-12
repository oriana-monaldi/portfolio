import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Taller Altagama",
    description:
      "Página web informativa desarrollada para presentar los servicios del taller de manera clara y profesional, proporcionando horarios de atención, ubicación y un detalle completo de las reparaciones disponibles, con el objetivo de facilitar a los clientes el acceso a la información relevante de forma rápida y sencilla, incluyendo además recomendaciones y consejos útiles para el cuidado de los vehículos.",
    image: "/desktop.png",
    tags: ["React", "Tailwind CSS"],
    github: "https://github.com/oriana-monaldi/Altagama",
    demo: "https://talleraltagama.com/",
  },
  {
    title: "Claudia Echavarry Estilista",
    description:
      "Página web mobile first desarrollada para uso interno de la estilista, permitiendo registrar turnos y consultas, así como gestionar altas, bajas y modificaciones según día y horario, con el objetivo de organizar la agenda de forma clara y totalmente personalizada,incorporando además funciones para el seguimiento de cada cliente y mejorar la gestión.",
    image: "/claudiaOrgizer.jpeg",
    tags: ["React", "Firebase", "Tailwind CSS"],
    github: "https://github.com/oriana-monaldi/Claudia-Estilista",
    demo: "#",
  },

  {
    title: "Altagama Organizer",
    description:
      "Página web mobile first orientada a optimizar la organización interna del taller, incorporando perfiles diferenciados para administración y personal. Permite registrar vehículos con su información asociada y visualizar los trabajos asignados, contribuyendo a una gestión más eficiente y colaborativa de las tareas diarias dentro del servicio mecánico.",
    image: "/altagamaOrganizer.jpeg",
    tags: ["React", "Firebase", "Tailwind CSS"],
    github: "https://github.com/oriana-monaldi/Claudia-Estilista",
    demo: "#",
  },
  {
    title: "AmbulanciaYa",
    description:
      "Página web desarrollada para la gestión integral de servicios de emergencia, permitiendo solicitar asistencia médica y administrar información vinculada a pacientes, paramédicos, choferes y ambulancias. El sistema incorpora distintos perfiles de usuario para organizar las tareas y agilizar la coordinación en situaciones de urgencia, ofreciendo una administración clara y centralizada del servicio.",
    image: "/ambulanciaYa.png",
    tags: ["React", "Tailwind CSS", "Golang", "PostgreSQL"],
    github: "#",
    demo: "https://ambulancia-ya.vercel.app/",
  },
  {
    title: "Hamster Habbits",
    description:
      "Aplicación móvil que permite gestionar hábitos diarios de forma simple e intuitiva, ofreciendo la posibilidad de registrar nuevas actividades, modificarlas o eliminarlas según la rutina del usuario. Incluye autenticación para acceso personalizado y una experiencia fluida tanto en dispositivos iOS como Android.",
    image: "/hamster.jpeg",
    tags: ["React Native", "TypeScript", "Firebase", "Expo"],
    github: "#",
    demo: "https://ambulancia-ya.vercel.app/",
  },
  {
    title: "Estelar",
    description:
      "Página web informativa y educativa sobre el Sistema Solar que permite explorar cada planeta, visualizar una galería interactiva de imágenes y disfrutar de un juego temático del espacio. El sitio ofrece una experiencia dinámica y responsive, brindando contenido claro y accesible para usuarios de todas las edades.",
    image: "/estelar.jpeg",
    tags: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
    github: "#",
    demo: "https://estellar.vercel.app/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
          Proyectos Destacados
        </h2>
        <p className="text-muted-foreground mb-12 text-lg">
          Una selección de mis trabajos más recientes
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:shadow-lg transition-shadow"
            >
              <div className="relative overflow-hidden bg-muted aspect-[3/2]">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-balance">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-justify">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
