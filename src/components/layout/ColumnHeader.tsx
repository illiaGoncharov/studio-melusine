import type { ReactNode } from 'react'

interface ColumnHeaderProps {
  children: ReactNode
}

export function ColumnHeader({ children }: ColumnHeaderProps) {
  return <div className="head">{children}</div>
}