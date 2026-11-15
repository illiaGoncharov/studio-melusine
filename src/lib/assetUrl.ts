/** Публичные файлы с ведущим `/` — с учётом base (GitHub Pages: /studio-melusine/). */
export function assetUrl(path: string): string {
  if (!path.startsWith('/')) return path
  const base = import.meta.env.BASE_URL
  return `${base}${path.slice(1)}`
}