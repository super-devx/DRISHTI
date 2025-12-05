import Hero from '../components/Hero'
import AboutLab from '../components/AboutLab'
import ResearchAreas from '../components/ResearchAreas'
import Team from '../components/Team'
import Publications from '../components/Publications'
import Projects from '../components/Projects'
import News from '../components/News'
import Contact from '../components/Contact'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* About Lab Section */}
      <AboutLab />

      {/* Research Areas Section */}
      <ResearchAreas />

      {/* Team Section */}
      <Team />

      {/* Publications Section */}
      <Publications />

      {/* Projects Section */}
      <Projects />

      {/* News & Updates Section */}
      <News />

      {/* Contact Section */}
      <Contact />
    </div>
  )
}

export default Home
