export default function Navbar() {
  const links = ['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact']

  return (
    <nav className="fixed top-0 w-full bg-bg/80 backdrop-blur z-40 px-10 py-4">
      <ul className="flex gap-8 justify-end text-sm">
        {links.map(link => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="hover:text-primary transition"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
