import type { CatalogGroup } from '../../types/portfolio'

interface CategoryIndexProps {
  groups: CatalogGroup[]
  onNavigate: (sectionId: string) => void
}

export function CategoryIndex({ groups, onNavigate }: CategoryIndexProps) {
  return (
    <div id="cats">
      {groups.map((group, groupIndex) => (
        <details key={group.name} className="grp" open={groupIndex === 0}>
          <summary>{group.name}</summary>
          <ul className="cats">
            {group.categories.map((category) => (
              <li key={category.id}>
                <a
                  href={`#${category.id}`}
                  onClick={(event) => {
                    event.preventDefault()
                    onNavigate(category.id)
                  }}
                >
                  <span>{category.indexLabel}</span>
                  <span>{category.name}</span>
                  <span>{'\u2193'}</span>
                </a>
              </li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  )
}