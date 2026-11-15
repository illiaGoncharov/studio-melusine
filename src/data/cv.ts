import type { CvRow } from '../types/cv'

export const cvRows: CvRow[] = [
  {
    label: 'Education',
    education: [
      {
        school:
          'The Bernard and Anne Spitzer School of Architecture of the City University of New York',
        detail: 'Bachelor of Architecture, GPA 3.6',
        period: '09.2020-05.2025',
      },
      {
        school: 'ETSAB - Barcelona School of Architecture',
        detail: '4 B.Arch. courses',
        period: 'Fall 2024',
      },
      {
        school: "Moscow Architectural Institute (MARCHI)",
        detail: "24 courses toward a bachelor's degree",
        period: '09.2018-06.2019',
      },
    ],
  },
  {
    label: 'Continuing education',
    simple: [
      {
        lines: [
          'Two-week architecture workshop VENICE STUDIO with Herzog & de Meuron Basel Ltd.',
        ],
        location: 'Venice, Italy',
        period: 'July 2025',
      },
      {
        lines: ['COB and Adobe natural building workshop'],
        location: 'Chiang Rai, Thailand',
        period: 'January 2026',
      },
    ],
  },
  {
    label: 'Awards',
    simple: [
      {
        lines: ['Joseph L. Fleischer, FAIA, Scholarship for Design Excellence'],
        period: '2023',
      },
      {
        lines: ['The Spitzer Changemaker Scholarship, Public Space Design'],
        period: '2023-2024',
      },
      {
        lines: ['Academic project featured in Dezeen'],
      },
    ],
  },
  {
    label: 'Employment',
    jobs: [
      {
        employer: 'Triumph Gallery',
        role: 'Architect in Exhibition Design & Production',
        location: 'Moscow, Russia',
        period: '10.2025 - ongoing',
        details:
          'Projects: exhibition “TOGETHER”; Catalog contemporary art fair; Suzdal Kremlin Historical Museum (in progress)',
      },
      {
        employer: 'DCC Works INC',
        role: 'Junior Furniture Carpenter',
        location: 'Brooklyn, NY',
        period: '03-05.2025',
        details:
          'Built-in shelving for the café at the Amant Foundation art center',
      },
      {
        employer: 'BKSK Architects LLP',
        role: 'Architectural Designer, Internship',
        location: 'New York, NY',
        period: '06.-08.2024',
        details:
          'Projects: Hart Island Visitor Center; conversion of a Midtown Manhattan building',
      },
      {
        role: 'Stage Design and Show Production at Warsaw Concerts',
        location: 'Brooklyn, NY',
        period: '09.2023 - 10.2023',
        details: 'Rock concert for The Nude Party',
      },
      {
        employer: 'TallerKEN Studio',
        role: 'Fundamental Design-Build Initiative',
        location: 'Guanacaste, Costa Rica',
        period: '06.2023 - 08.2023',
        details:
          'Play space with an amphitheater for a local community of families and artists',
      },
      {
        role: 'Project “Innovative Robotics for Growing Food in Urban Ecosystems”',
        location: 'Spitzer School of Architecture, New York, NY',
        period: '06.2022 - 08.2022',
        details: 'Modular rooftop garden prototype for the FarmBot system',
      },
      {
        employer: 'Axis Mundi Design LLC',
        role: 'Designer and Architectural Visualizer',
        location: 'New York, NY',
        period: '08.2019 - 03.2020',
        details:
          'Black Lava Visitor Center competition concept; Hart Island Memorial visualizations',
      },
      {
        employer: 'Art-Group Kamen',
        role: "Architect's Assistant",
        location: 'Moscow, Russia',
        period: '07.2017 - 07.2019',
      },
    ],
  },
  {
    label: 'Skills',
    skills: [
      'Rhinoceros/V-Ray, SketchUp, Photoshop, InDesign, Illustrator, Lightroom, ArchiCAD, AutoCAD, Blender, Premiere Pro',
      'Languages: Russian, English, Spanish (beginner)',
    ],
  },
]