import skills from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="px-10 py-24 bg-card">
      <h2 className="text-3xl font-bold text-primary mb-10">Skills</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {skills.map(group => (
          <div key={group.title}>
            <h3 className="text-xl mb-4">{group.title}</h3>
            <ul className="flex flex-wrap gap-3">
              {group.items.map(skill => (
                <li
                  key={skill}
                  className="border border-primary px-4 py-2 text-sm rounded"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
