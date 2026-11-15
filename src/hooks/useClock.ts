import { useEffect, useState } from 'react'

/** Часы в формате en-GB, как в прототипе. */
export function useClock(): string {
  const [time, setTime] = useState('00:00:00')

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString('en-GB'))
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [])

  return time
}