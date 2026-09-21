import { useEffect, useRef, useState } from 'react'

export function useCountUp(target, duration = 1800, start = false) {
  const [value, setValue] = useState(0)
  const frameRef = useRef(null)

  useEffect(() => {
    if (!start) return

    const startTime = performance.now()
    const numTarget = parseFloat(target)

    const tick = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // easeOutQuart
      const eased = 1 - Math.pow(1 - progress, 4)
      setValue(Math.floor(eased * numTarget))
      if (progress < 1) frameRef.current = requestAnimationFrame(tick)
      else setValue(numTarget)
    }

    frameRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameRef.current)
  }, [start, target, duration])

  return value
}
