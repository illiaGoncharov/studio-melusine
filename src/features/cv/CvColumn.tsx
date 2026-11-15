import { Column } from '../../components/layout/Column'
import { ColumnHeader } from '../../components/layout/ColumnHeader'
import { cvRows } from '../../data/cv'
import { CvRow } from './CvRow'

export function CvColumn() {
  return (
    <Column className="cv">
      <ColumnHeader>
        <b>CV</b>
      </ColumnHeader>
      {cvRows.map((row) => (
        <CvRow key={row.label} row={row} />
      ))}
    </Column>
  )
}