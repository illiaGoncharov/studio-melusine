import { categories } from '../data/categories'
import type {
  CatalogCategory,
  CatalogGroup,
  CatalogProject,
} from '../types/portfolio'

type NumberedCategory = CatalogCategory & { projects: CatalogProject[] }

export function buildCatalog(source = categories): CatalogGroup[] {
  const groups: CatalogGroup[] = []
  let categoryIndex = 0
  let projectIndex = 0

  source.forEach((category) => {
    categoryIndex += 1
    const projects = category.projects.map((project) => {
      projectIndex += 1
      return { ...project, index: projectIndex }
    })

    const catalogCategory: NumberedCategory = {
      ...category,
      index: categoryIndex,
      indexLabel: categoryIndex < 10 ? `0${categoryIndex}` : String(categoryIndex),
      projects,
    }

    let group = groups.find((entry) => entry.name === category.group)
    if (!group) {
      group = { name: category.group, gs: category.gs, categories: [] }
      groups.push(group)
    }
    group.categories.push(catalogCategory)
  })

  return groups as CatalogGroup[]
}

export const catalogGroups = buildCatalog()