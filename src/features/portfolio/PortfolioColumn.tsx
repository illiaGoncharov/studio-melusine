import { useCallback, useRef, useState } from 'react'
import { Column } from '../../components/layout/Column'
import { ColumnHeader } from '../../components/layout/ColumnHeader'
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { catalogGroups } from '../../lib/groupCatalog'
import type { ProjectModalContext } from '../../types/portfolio'
import { CategoryIndex } from './CategoryIndex'
import { CategorySection } from './CategorySection'
import { ProjectModal } from './ProjectModal'

export function PortfolioColumn() {
  const centerRef = useRef<HTMLElement>(null)
  const triggerRef = useRef<HTMLElement | null>(null)
  const [sectionTitle, setSectionTitle] = useState('Material')
  const [modalContext, setModalContext] = useState<ProjectModalContext | null>(
    null,
  )
  const reduceMotion = useReducedMotion()

  const handleSpy = useCallback((dataSet: string) => {
    setSectionTitle(dataSet)
  }, [])

  useScrollSpy(centerRef, handleSpy)
  useBodyScrollLock(modalContext !== null)

  const navigateToCategory = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    section?.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'start',
    })
  }

  const openProject = (
    context: ProjectModalContext,
    trigger: HTMLElement,
  ) => {
    triggerRef.current = trigger
    setModalContext(context)
  }

  const closeProject = () => {
    setModalContext(null)
    document.getElementById('mgrid')?.replaceChildren()
    triggerRef.current?.focus()
  }

  return (
    <>
      <Column as="main" id="center" ref={centerRef}>
        <ColumnHeader>
          <span id="setname">{sectionTitle}</span>
        </ColumnHeader>

        <section className="set index" data-set="Material">
          <CategoryIndex
            groups={catalogGroups}
            onNavigate={navigateToCategory}
          />
        </section>

        <div id="sets">
          {catalogGroups.map((group) => (
            <div key={group.name}>
              <div className="gt">{group.name}</div>
              {group.categories.map((category) => (
                <CategorySection
                  key={category.id}
                  category={category}
                  groupShort={group.gs}
                  onOpen={openProject}
                />
              ))}
            </div>
          ))}
        </div>
      </Column>

      <ProjectModal context={modalContext} onClose={closeProject} />
    </>
  )
}