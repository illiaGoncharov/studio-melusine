import { forwardRef, type ReactNode } from 'react'

interface ColumnProps {
  as?: 'aside' | 'main'
  className?: string
  id?: string
  children: ReactNode
}

export const Column = forwardRef<HTMLElement, ColumnProps>(function Column(
  { as: Tag = 'aside', className = '', id, children },
  ref,
) {
  const classes = ['col', className].filter(Boolean).join(' ')
  return (
    <Tag className={classes} id={id} ref={ref as React.Ref<HTMLDivElement>}>
      {children}
    </Tag>
  )
})