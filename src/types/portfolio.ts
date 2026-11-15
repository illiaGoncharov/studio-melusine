export type ProjectFit = 'cover' | 'contain'

export interface Project {
  title: string
  client: string
  loc: string
  year: string
  type: string
  short: string
  long: string[]
  imgs: string[]
  alt: string
  fit?: ProjectFit
  video?: string
}

export interface Category {
  id: string
  name: string
  group: string
  gs: string
  projects: Project[]
}

export interface CatalogCategory extends Omit<Category, 'projects'> {
  index: number
  indexLabel: string
  projects: CatalogProject[]
}

export interface CatalogProject extends Project {
  index: number
}

export interface CatalogGroup {
  name: string
  gs: string
  categories: Array<CatalogCategory & { projects: CatalogProject[] }>
}

export interface ProjectModalContext {
  project: Project
  categoryPath: string
}