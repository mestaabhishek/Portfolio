export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">
        ABOUT <span>ME</span>
      </h2>
      <div className="section-underline" />

      <div className="grid md:grid-cols-2 gap-12 mt-16">
        <div className="text-gray-400 leading-7">
          <p>
            I’m a <span className="text-primary">Software QA Engineer</span> with
            4+ years of experience in UI & API automation, CI/CD pipelines,
            accessibility testing, and AI-assisted testing.
          </p>

          <p className="mt-6">
            I enjoy building robust automation frameworks and improving quality
            processes across teams and platforms.
          </p>

          <p className="mt-6">
            Based in <span className="text-primary">India</span>, open to
            relocation.
          </p>
        </div>

        <div className="space-y-6">
          {[
            ['Automation Engineer', 'Playwright, Cypress, Selenium'],
            ['API Specialist', 'Rest Assured, Postman'],
            ['CI/CD & Cloud', 'GitLab, Jenkins, AWS, Azure']
          ].map(([title, desc]) => (
            <div key={title} className="card card-hover">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-gray-400 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
