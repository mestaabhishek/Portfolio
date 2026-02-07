import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const trailsRef = useRef([])

  useEffect(() => {
    const cursor = cursorRef.current

    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      createTrail(mouseX, mouseY)
    }

    const animate = () => {
      if (cursor) {
        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
      }

      trailsRef.current.forEach((trail, index) => {
        trail.life -= 1
        trail.element.style.opacity = trail.life / trail.maxLife
        trail.element.style.transform = `
          translate(${trail.x}px, ${trail.y}px)
          scale(${trail.life / trail.maxLife})
        `

        if (trail.life <= 0) {
          trail.element.remove()
          trailsRef.current.splice(index, 1)
        }
      })

      requestAnimationFrame(animate)
    }

    const createTrail = (x, y) => {
      const el = document.createElement('div')
      el.className = 'cursor-trail'
      document.body.appendChild(el)

      trailsRef.current.push({
        element: el,
        x,
        y,
        life: 60,       // ~1 second at 60fps
        maxLife: 60
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="cursor-main"
    />
  )
}
