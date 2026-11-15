import { Column } from '../../components/layout/Column'
import { ColumnHeader } from '../../components/layout/ColumnHeader'
import { bioLinks, bioParagraphs, bioTitle } from '../../data/bio'

export function BioColumn() {
  return (
    <Column className="bio">
      <ColumnHeader>
        <b>{bioTitle}</b>
      </ColumnHeader>
      {bioParagraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 32)}>{paragraph}</p>
      ))}
      <p>
        {bioLinks.map((link, index) => (
          <span key={link.href}>
            {index > 0 && <br />}
            <a href={link.href}>{link.label}</a>
          </span>
        ))}
      </p>
    </Column>
  )
}