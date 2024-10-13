import './App.css'
import About from './elements/About/About'
import Footer from './elements/Footer/Footer'
import Hire from './elements/Hire/Hire'
import Intro from './elements/Intro/Intro'
import Navbar from './elements/Navbar/Navbar'
import Projects from './elements/Projects/Projects'

function App() {


  return (
    <>
      <div>
        <div className='sticky top-0 z-10'>
          <Navbar></Navbar>
        </div>
        <Intro></Intro>
        <About></About>
        <Projects></Projects>
        <Hire></Hire>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App