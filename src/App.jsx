import { Box } from '@mui/material'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Footer from './components/Footer/Footer'

function App() {
  const Info = {
    nombre: "Marcos",
    apellido: "Arias",
    skills: "Javascript, C#, SQL, MySQL",
    lugarEstudio: "UTN - Tucuman"
  }
  
  return (
    <Box sx={{ backgroundColor: "#f7f7f7" }}>
      <Navbar />
      <Box sx={{ marginLeft: '200px' }}>
        <Box margin={'0 auto'} padding={'0 33px'} maxWidth={'1140px'}>
          <About {...Info} />
          <Footer />
        </Box>
      </Box>
    </Box>
  )
}

export default App
