import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../animations'
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="section">
      {/* Title */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="section-title">
          LET’S <span>CONNECT</span>
        </h2>
        <div className="section-underline" />
        <p className="text-gray-400 mt-6">
          Let’s build something amazing
        </p>
      </motion.div>

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 gap-16 mt-20 items-start"
      >
        {/* LEFT: Contact Info */}
        <motion.div variants={fadeUp} className="space-y-10">
          <ContactItem
            icon={<Mail />}
            label="EMAIL"
            value="mestaabhishek3@gmail.com"
            href="mailto:mestaabhishek3@gmail.com"
          />

          <ContactItem
            icon={<Phone />}
            label="PHONE"
            value="+91-7259314131"
            href="tel:+917259314131"
          />

          <ContactItem
            icon={<MapPin />}
            label="LOCATION"
            value="India"
          />
        </motion.div>

        {/* RIGHT: Social Links */}
        <motion.div variants={fadeUp}>
          <h3 className="text-sm tracking-widest mb-6">FOLLOW ME</h3>

          <div className="flex gap-6">
            <SocialIcon
              href="https://github.com/mestaabhishek"
              icon={<Github />}
            />
            <SocialIcon
              href="https://linkedin.com/in/abhishek-mesta"
              icon={<Linkedin />}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

/* ---------- Sub Components ---------- */

function ContactItem({ icon, label, value, href }) {
  const Wrapper = href ? 'a' : 'div'

  return (
    <Wrapper
      href={href}
      className="flex items-start gap-6 group"
    >
      <div className="w-12 h-12 bg-primary flex items-center justify-center rounded">
        {icon}
      </div>

      <div>
        <p className="text-sm tracking-widest">{label}</p>
        <p className="text-gray-400 mt-1 group-hover:text-primary transition">
          {value}
        </p>
      </div>
    </Wrapper>
  )
}

function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      className="w-12 h-12 border border-white/20 flex items-center justify-center
                 hover:border-primary hover:text-primary transition"
    >
      {icon}
    </a>
  )
}
