import type { CatalogProject, ProjectModalContext } from '../../types/portfolio'

interface ProjectCardProps {
  project: CatalogProject
  categoryPath: string
  onOpen: (context: ProjectModalContext, trigger: HTMLElement) => void
}

export function ProjectCard({
  project,
  categoryPath,
  onOpen,
}: ProjectCardProps) {
  const shotClass =
    project.fit === 'contain' ? 'shot contain' : 'shot'

  const openFrom = (trigger: HTMLElement) => {
    onOpen({ project, categoryPath }, trigger)
  }

  return (
    <article className="project">
      <button
        type="button"
        className={shotClass}
        aria-label={`Open ${project.title}`}
        onClick={(event) => openFrom(event.currentTarget)}
      >
        {project.imgs[0] ? (
          <img src={project.imgs[0]} alt={project.alt} />
        ) : (
          <span className="empty">Images to be added</span>
        )}
      </button>
      <div className="cap">
        <div>
          <button
            type="button"
            onClick={(event) => openFrom(event.currentTarget)}
          >
            {project.index}. {project.title}
          </button>
        </div>
        <div>
          <p>
            <i>{project.client}</i>
            <br />
            {[project.loc, project.year].filter(Boolean).join(', ')}
            <br />
            {project.type}
          </p>
          <p>{project.short}</p>
        </div>
      </div>
    </article>
  )
}