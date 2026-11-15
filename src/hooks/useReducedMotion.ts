import { useMemo } from 'react'

/** Считывается один раз при монтировании, как в исходном скрипте. */
export function useReducedMotion(): boolean {
  return useMemo(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    [],
  )
}