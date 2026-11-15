import type { CatalogCategory, CatalogProject } from '../../types/portfolio'
import type { ProjectModalContext } from '../../types/portfolio'
import { ProjectCard } from './ProjectCard'

interface CategorySectionProps {
  category: CatalogCategory & { projects: CatalogProject[] }
  groupShort: string
  onOpen: (context: ProjectModalContext, trigger: HTMLElement) => void
}

export function CategorySection({
  category,
  groupShort,
  onOpen,
}: CategorySectionProps) {
  const dataSet = `${groupShort} > ${category.name}`

  return (
    <section className="set" id={category.id} data-set={dataSet}>
      <h2 className="cat">{category.name}</h2>
      {category.projects.length === 0 ? (
        <p className="none">Projects to be added.</p>
      ) : (
        category.projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            categoryPath={dataSet}
            onOpen={onOpen}
          />
        ))
      )}
    </section>
  )
}