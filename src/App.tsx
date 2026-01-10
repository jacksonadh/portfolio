import { Navbar } from './components/common/Navbar'
import { 
  Hero, 
  Services, 
  Portfolio, 
  About, 
  Process, 
  Contact,
  Footer 
} from './components/sections'

function App() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
