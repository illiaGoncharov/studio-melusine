import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import type { ProjectModalContext } from '../../types/portfolio'

interface ProjectModalProps {
  context: ProjectModalContext | null
  onClose: () => void
}

export function ProjectModal({ context, onClose }: ProjectModalProps) {
  const reduceMotion = useReducedMotion()
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const open = context !== null

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    panelRef.current && (panelRef.current.scrollTop = 0)
  }, [open, context])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !context?.project.video) return

    if (reduceMotion) {
      video.controls = true
      return
    }

    const playPromise = video.play()
    if (playPromise?.catch) {
      playPromise.catch(() => {
        video.controls = true
      })
    }
  }, [context, reduceMotion])

  if (!open || !context) {
    return null
  }

  const { project, categoryPath } = context
  const metaRows: Array<[string, string | undefined]> = [
    ['Role', project.client],
    ['Location', project.loc],
    ['Year', project.year],
  ]

  return createPortal(
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="mtitle"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="panel" id="panel" ref={panelRef}>
        <div className="mhead">
          <b id="mtitle">{project.title}</b>
          <span id="mcat">
            {categoryPath}
            {'\n'}
            {project.type}
          </span>
          <button
            type="button"
            className="mclose"
            id="mclose"
            ref={closeRef}
            aria-label="Close"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        <div className="mbody">
          <div className="mleft" id="mleft">
            <img src={project.imgs[0]} alt={project.alt} />
            <p className="meta">
              {metaRows.map(([label, value]) => {
                if (!value) return null
                return (
                  <span key={label}>
                    <span>{label} &gt; </span>
                    {value}
                    <br />
                  </span>
                )
              })}
            </p>
            {project.long.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          <div className="mgrid" id="mgrid">
            {project.video ? (
              <video
                ref={videoRef}
                className="mvideo"
                src={project.video}
                muted
                loop
                playsInline
                aria-label="Excerpt from the show"
              />
            ) : null}
            {project.imgs.slice(1).map((src) => (
              <img key={src} src={src} alt={project.alt} loading="lazy" />
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}