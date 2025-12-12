const skills = [
  {
    category: "Languajes and Frameworks",
    items: ["React", "React Native", "Next.js", "TypeScript", "JavaScript", "Phython", "Golang", "Kotlin", "HTML" ],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS Modules", "Sass",],
  },
  {
    category: "Tools & Others",
    items: ["Git", "GitHub", "Azure", "Postman", "Linux", "Responsive Design", "Jira", "Web Accessibility", "REST APIs", "Figma",],
  },
  {
    category: "Database & Others",
    items: ["PostgreSQL" , "MySQL", "MongoDB", "Firebase", ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Habilidades</h2>
        <p className="text-muted-foreground mb-12 text-lg">Tecnologías y herramientas que domino</p>

        
        <div className="space-y-12">
          {skills.map((skillGroup, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-4 text-primary">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
