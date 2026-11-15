export interface CvEducationEntry {
  school: string
  detail: string
  period: string
}

export interface CvSimpleEntry {
  lines: string[]
  location?: string
  period?: string
}

export interface CvJobEntry {
  employer?: string
  role: string
  location?: string
  period?: string
  details?: string
}

export interface CvRow {
  label: string
  education?: CvEducationEntry[]
  simple?: CvSimpleEntry[]
  jobs?: CvJobEntry[]
  skills?: string[]
}