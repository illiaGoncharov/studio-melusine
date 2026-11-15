import { useClock } from '../../hooks/useClock'

export function Clock() {
  const time = useClock()
  return (
    <div className="fix">
      <span id="clock">{time}</span>
    </div>
  )
}