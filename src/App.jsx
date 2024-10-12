import './App.css'
import About from './elements/About/About'
import Intro from './elements/Intro/Intro'
import Navbar from './elements/Navbar/Navbar'

function App() {


  return (
    <>
      <div>
        <div className='sticky top-0 z-10'>
          <Navbar></Navbar>
        </div>
        <Intro></Intro>
        <About></About>
      </div>
    </>
  )
}

export default App