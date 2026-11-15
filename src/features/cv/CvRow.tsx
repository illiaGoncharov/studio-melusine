import type { CvRow as CvRowData } from '../../types/cv'

interface CvRowProps {
  row: CvRowData
}

export function CvRow({ row }: CvRowProps) {
  return (
    <div className="row">
      <div>{row.label}</div>
      <div>
        {row.education?.map((entry) => (
          <p key={entry.school}>
            {entry.school} <i>{entry.detail}</i>
            <br />
            <u>{entry.period}</u>
          </p>
        ))}

        {row.simple?.map((entry) => (
          <p key={`${entry.lines[0]}-${entry.period ?? ''}`}>
            {entry.lines.map((line, lineIndex) => (
              <span key={line}>
                {line}
                {lineIndex < entry.lines.length - 1 ? <br /> : null}
              </span>
            ))}
            {entry.location ? (
              <>
                <br />
                <i>{entry.location}</i>
              </>
            ) : null}
            {entry.period ? (
              <>
                <br />
                <u>{entry.period}</u>
              </>
            ) : null}
          </p>
        ))}

        {row.jobs?.map((job) => (
          <p key={`${job.employer ?? job.role}-${job.period ?? ''}`}>
            {job.employer ? (
              <>
                <b>{job.employer}</b>
                <br />
                {job.role}
                <br />
              </>
            ) : (
              <>
                {job.role}
                <br />
              </>
            )}
            {job.location ? (
              <>
                <i>{job.location}</i>
                <br />
              </>
            ) : null}
            {job.period ? <u>{job.period}</u> : null}
            {job.details ? (
              <>
                <br />
                {job.details}
              </>
            ) : null}
          </p>
        ))}

        {row.skills?.map((skill) => (
          <p key={skill}>{skill}</p>
        ))}
      </div>
    </div>
  )
}