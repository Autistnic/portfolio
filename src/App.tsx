import Main from './components/Main'
import Sidenav from './components/Sidenav'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
function App() {

  return (
    <div>
<Sidenav/>



    <div className=' overflow-hidden h-auto'>
    <Main/>
    </div>
    <div className='overflow-hidden h-auto'>
    <About/>
    </div>
    <div className=' overflow-hidden h-auto'>
    <Work/>
    </div >
    <div  className=' overflow-hidden h-auto'>
    <Contact></Contact>
    </div>
    </div>
  )
}

export default App
