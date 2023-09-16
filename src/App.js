import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home.js"
import About from "./components/About/About.js"
import Contact from "./components/Contact/Contact.js"
import Project from "./components/Project/Project.js"
import Header from "./components/Header/Header.js"
import ParticlesBackground from "./components/Particles/ParticlesBackground.js"

function App() {
  return (
    <Router>
      <main className="flex flex-col w-screen h-screen">
        <ParticlesBackground />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
