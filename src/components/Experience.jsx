import experience from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section relative">
      <h2 className="section-title">
        MY <span>JOURNEY</span>
      </h2>
      <div className="section-underline" />

      {/* Center line */}
      <div className="absolute left-1/2 top-40 bottom-0 w-px bg-primary/30 hidden md:block" />

      <div className="mt-20 space-y-20">
        {experience.map((item, i) => (
          <div
            key={item.company}
            className={`md:w-1/2 ${
              i % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:pr-12'
            }`}
          >
            <div className="card card-hover">
              <h3 className="text-xl font-semibold">
                {item.company}
              </h3>
              <p className="text-primary text-sm">{item.title}</p>
              <p className="text-gray-500 text-sm mt-1">
                {item.duration}
              </p>

              <ul className="mt-4 space-y-2 text-gray-400 text-sm">
                {item.points.map(p => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
