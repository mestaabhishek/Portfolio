import { motion } from 'framer-motion'
import { certifications } from '../data/certifications'

export default function Certifications() {
  return (
    <section className="bg-black py-24 px-6 md:px-20">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold">
          CERTIFICATIONS
        </h2>
        <div className="w-20 h-1 bg-primary mt-4" />
      </motion.div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10">
        {certifications.map((cert, index) => (
          <motion.a
            key={cert.title}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="
              block
              bg-[#0b0b0b]
              border border-white/10
              p-8
              hover:border-primary
              transition
              group
            "
          >
            {/* Red hover top bar */}
            <span className="
              absolute top-0 left-0 w-full h-[2px]
              bg-primary scale-x-0 group-hover:scale-x-100
              transition-transform origin-left
            " />

            {/* Title */}
            <h3 className="text-lg font-semibold text-white group-hover:text-primary transition">
              {cert.title}
            </h3>

            {/* Provider */}
            <p className="text-gray-400 mt-3">
              {cert.provider}
            </p>

            {/* CTA */}
            <p className="mt-6 text-primary font-semibold text-sm">
              VIEW CERTIFICATE →
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
