import { Container } from "@mui/material"
import Header from "./components/header/Header"
import Projects from "./components/projects/Projects"
import ParticlesComponent from "./components/particles/particles"

function App() {

  return (
    <>
      <ParticlesComponent/>
      <div className="container">
        <Header />
        <Projects />
      </div>
    </>
  )
}

export default App
