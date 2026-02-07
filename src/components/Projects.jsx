import projects from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">
        FEATURED <span>PROJECTS</span>
      </h2>
      <div className="section-underline" />

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {projects.map(project => (
          <div
            key={project.title}
            className="group relative bg-[#0e0e0e] border border-white/10 rounded-xl p-6
                       hover:border-primary transition-all duration-300"
          >
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <img
                src={project.icon}
                alt={project.title}
                className="w-14 h-14 pixelated"
              />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-center">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 mt-4 text-sm text-center leading-relaxed">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="mt-6 flex flex-wrap gap-2 justify-center text-xs">
              {project.tech?.map(t => (
                <span
                  key={t}
                  className="border border-white/15 px-2 py-1 text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Demo link */}
            {project.links?.map(link => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                className="mt-6 flex items-center justify-center gap-2
                           text-primary text-sm underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
