import { Clock } from './components/layout/Clock'
import { BioColumn } from './features/bio/BioColumn'
import { CvColumn } from './features/cv/CvColumn'
import { PortfolioColumn } from './features/portfolio/PortfolioColumn'

function App() {
  return (
    <>
      <div className="grid">
        <BioColumn />
        <PortfolioColumn />
        <CvColumn />
      </div>
      <Clock />
    </>
  )
}

export default App