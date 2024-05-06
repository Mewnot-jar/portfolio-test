import Header from "./components/header/Header"
import ParticlesComponent from "./components/particles/particles"

function App() {

  return (
    <>
      <ParticlesComponent id='particles' />
      <div className="container">
        <Header />
        <div className="section-main">

        </div>
      </div>
    </>
  )
}

export default App
