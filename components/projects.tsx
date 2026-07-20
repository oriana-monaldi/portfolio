import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "Taller Altagama",
    description:
      "Sitio web informativo desarrollado para un taller mecánico, diseñado para presentar sus servicios, horarios de atención, ubicación y datos de contacto mediante una interfaz clara, moderna y fácil de navegar, facilitando el acceso a la información para los clientes.",
    image: "/desktop.png",
    tags: ["React", "Tailwind CSS"],
    github: "https://github.com/oriana-monaldi/Altagama",
    demo: "https://talleraltagama.com/",
  },
  {
    title: "Claudia Echavarry Estilista",
    description:
      "Página web mobile first desarrollada para una estilista, diseñada para gestionar turnos, consultas y la agenda diaria mediante una interfaz clara, moderna y fácil de usar, permitiendo administrar clientes y organizar la información de forma eficiente.",
    image: "/claudiaOrgizer.jpeg",
    tags: ["React", "Next.js", "Firebase", "Tailwind CSS"],
    github: "https://github.com/oriana-monaldi/Claudia-Estilista",
  },

  {
    title: "ARQAP - Archivo de Registro y Catalogación Arqueológica Platense",
    description:
      "Aplicación web mobile first desarrollada en equipo como Proyecto Final de carrera para la gestión del patrimonio arqueológico del Museo de Ciencias Naturales de La Plata. Permite registrar, organizar y localizar piezas mediante un mapa interactivo, ofreciendo una interfaz intuitiva y accesible desde dispositivos móviles y computadoras.",
    image: "/ARQAP.jpeg",
    tags: ["React Native", "Expo", "TypeScript", "Golang", "Docker", "Figma"],
    github: "https://github.com/ARQAP",
    demo: "",
  },

  {
    title: "Altagama Organizer",
    description:
      "Página web mobile first orientada a optimizar la organización interna del taller, incorporando perfiles diferenciados para administración y personal. Permite registrar vehículos con su información asociada y visualizar los trabajos asignados, contribuyendo a una gestión más eficiente y colaborativa de las tareas diarias dentro del servicio mecánico.",
    image: "/altagamaOrganizer.jpeg",
    tags: ["React", "Next.js", "Firebase", "Tailwind CSS"],
    github: "https://github.com/oriana-monaldi/Claudia-Estilista",
  },
  {
    title: "AmbulanciaYa",
    description:
      "Sistema web desarrollado en equipo para la gestión integral de servicios de emergencia. Permite solicitar asistencia médica y administrar pacientes, paramédicos, choferes y ambulancias. Cuenta con perfiles diferenciados para optimizar la coordinación operativa y centralizar la administración del servicio.",
    image: "/ambulanciaYa.png",
    tags: ["React", "Tailwind CSS", "Golang", "PostgreSQL"],
    github: "#",
    demo: "https://ambulancia-ya.vercel.app/",
  },
  {
    title: "LINSI-Track",
    description:
      "Sistema web desarrollado para la gestión académica. Permite a los profesores crear trabajos prácticos y evaluaciones, mientras que los estudiantes pueden realizar entregas, consultar calificaciones y hacer un seguimiento de su rendimiento. Incorpora perfiles diferenciados para administradores, profesores y alumnos, además de autenticación segura y cálculo automático de promedios.",
    image: "/Linsi.jpeg",
    tags: ["Golang", "Gin", "GORM", "PostgreSQL", "Docker", "Node.js"],
    github: "#",
  },
  {
    title: "Estelar",
    description:
      "Página web informativa y educativa sobre el Sistema Solar. Permite explorar los planetas, visualizar una galería interactiva de imágenes y disfrutar de un juego temático del espacio, ofreciendo una experiencia dinámica, intuitiva y adaptable a distintos dispositivos.",
    image: "/estelar.jpeg",
    tags: ["React", "CSS", "JavaScript", "DOM Manipulation"],
    github: "#",
    demo: "https://estellar.vercel.app/",
  },
  {
    title: "Hamster Habbits",
    description:
      "Aplicación móvil desarrollada para la gestión de hábitos diarios. Permite crear, editar y eliminar actividades de forma sencilla, ayudando a los usuarios a organizar sus rutinas mediante una interfaz intuitiva. Incluye autenticación segura y una experiencia optimizada para dispositivos iOS y Android.",
    image: "/hamster.jpeg",
    tags: ["React Native", "TypeScript", "Firebase", "Expo"],
    github: "#",
  },
  {
    title: "Heladera Interactiva Manos Libres",
    description:
      "Proyecto de heladera inteligente desarrollado para optimizar la experiencia en la cocina mediante interacción por voz. Permite consultar los ingredientes disponibles y obtener recetas personalizadas según los alimentos detectados, incorporando información nutricional y una experiencia completamente manos libres.",
    image: "/asistente.jpeg",
    tags: [
      "IoT",
      "JavaScript",
      "Asistentes de Voz",
      "React",
      "Reconocimiento por Sensores",
    ],
    github: "#",
  },
  {
    title: "Urufarr Fences",
    description:
      "Sitio web corporativo desarrollado para Urufarr Fences, empresa de cercados ubicada en Evansville, Indiana. Cuenta con diseño responsive, navegación bilingüe (inglés/español), optimización SEO, galería de trabajos y secciones de servicios y contacto, brindando una experiencia rápida, moderna y enfocada en la generación de clientes potenciales.",
    image: "/urufarr.png",
    tags: [
      "React",
      "TypeScript",
      "Responsive Design",
      "SEO",
      "UI/UX",
      "Tailwind CSS",
    ],
    github: "https://urufarr-fences.com/about",
    demo: "https://urufarr-fences.com/",
  },
  {
    title: "App TV",
    description:
      "Sistema de gestión de televisores desarrollado para administrar clientes, equipos y planes de pago desde un panel centralizado. Incorpora autenticación segura mediante Firebase Authentication, perfiles diferenciados para administradores y usuarios, control de cuotas, seguimiento del estado de los dispositivos y una interfaz optimizada para dispositivos móviles.",
    image: "/appTv.png",
    tags: [
      "React",
      "TypeScript",
      "Firebase Authentication",
      "Tailwind CSS",
      "Mobile First",
    ],
    github: "https://urufarr-fences.com/",
  },
  {
    title: "Cortada Roo",
    description:
      "Sistema de gestión de reservas desarrollado para administrar departamentos, huéspedes y disponibilidad desde un panel centralizado. Incluye un sitio de reservas online y un panel privado con dashboard, calendario de ocupación, alta manual de reservas, gestión completa del ciclo de cada estadía y modo vacaciones, con una interfaz optimizada para dispositivos móviles.",
    image: "/cotadaRoo.png",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Responsive Design",
      "Resend",
    ],
    demo: "https://www.temporarioscortadaro.com/",
    github: "https://github.com/oriana-monaldi/CortadaRoo",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
          Proyectos Destacados
        </h2>
        <p className="text-muted-foreground mb-12 text-lg">
          Una selección de mis trabajos más recientes
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden p-0 border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-full h-[320px] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
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

                {project.demo && (
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
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
