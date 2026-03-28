import { useEffect, useRef, useState } from 'react'

function AnimatedCounter({ value, duration = 1500, suffix = '' }) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const counterRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!hasStarted) return

    let start = 0
    const increment = value / (duration / 16)

    const timer = setInterval(() => {
      start += increment

      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [hasStarted, value, duration])

  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
  )
}

export default AnimatedCounter