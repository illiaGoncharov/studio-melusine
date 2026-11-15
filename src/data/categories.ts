import type { Category } from '../types/portfolio'
import categoriesJson from './_portfolio.generated.json'

export const categories = categoriesJson as Category[]