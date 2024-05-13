import { Container } from "@mui/material"
import Header from "./components/header/Header"
import Projects from "./components/projects/Projects"
import ParticlesComponent from "./components/particles/particles"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"

function App() {

  return (
    <>
      <ParticlesComponent />
      <div className="container">
        <Header />
        <About />
        <Projects />
        <Contact/>
      </div>
    </>
  )
}

export default App
