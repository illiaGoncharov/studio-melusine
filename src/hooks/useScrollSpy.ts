import { type RefObject, useEffect } from 'react'

/** Обновляет подпись в шапке центральной колонки при прокрутке. */
export function useScrollSpy(
  containerRef: RefObject<HTMLElement | null>,
  onActive: (dataSet: string) => void,
): void {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const sections = Array.from(
      container.querySelectorAll<HTMLElement>('.set'),
    )
    if (sections.length === 0) return

    const update = () => {
      const threshold = container.getBoundingClientRect().top + 140
      let current = sections[0]
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= threshold) {
          current = section
        }
      })
      onActive(current.getAttribute('data-set') ?? 'Material')
    }

    container.addEventListener('scroll', update, { passive: true })
    window.addEventListener('scroll', update, { passive: true })
    update()

    return () => {
      container.removeEventListener('scroll', update)
      window.removeEventListener('scroll', update)
    }
  }, [containerRef, onActive])
}