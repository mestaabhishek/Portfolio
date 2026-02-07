import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="z-10"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-widest">
          HI, I’M <span className="text-primary">ABHISHEK</span>
        </h1>

        <h2 className="mt-6 text-3xl md:text-4xl font-bold">
          BUILDING <span className="text-primary">QUALITY SOFTWARE</span>
        </h2>

        <p className="mt-6 text-gray-400 max-w-xl mx-auto">
          Software QA Engineer | Automation | CI/CD | AI-Driven Testing
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <a
            href="#contact"
            className="bg-primary px-8 py-3 font-semibold rounded"
          >
            LET’S CONNECT
          </a>

          <a
            href="/resume.pdf"
            className="border border-primary px-8 py-3 font-semibold rounded"
          >
            DOWNLOAD RESUME
          </a>
        </div>
      </motion.div>

      {/* Glow */}
      <div className="absolute w-[600px] h-[600px] bg-primary/20 blur-[180px] rounded-full top-[-200px]" />
    </section>
  )
}
