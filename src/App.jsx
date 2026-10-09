import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Districts from './components/Districts'
import Reaping from './components/Reaping'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Districts />
      <Reaping />
      <Footer />
    </div>
  )
}

export default App