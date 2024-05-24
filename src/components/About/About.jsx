/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material"
import imgHero from '../../assets/imgLight.gif'

const About = ({ nombre, apellido, skills, lugarEstudio }) => {
  console.log(nombre)
  return (
    <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ display: 'flex',alignItems: 'center',justifyContent: 'center', backgroundColor: "#ffff", borderRadius: '50px', width: '100%' }} gap={6}>
        <Box sx={{ width: '40%' }}>
          <Typography variant="h4">Hola 👋! soy {nombre} {apellido}</Typography> 
          <Typography> Soy estudiante de programacion en {lugarEstudio}, en donde aprendi {skills} </Typography>
        </Box>
        <Box sx={{ width: '40%' }}>
          <img src={imgHero} style={{ width: '100%' }}></img>
        </Box>
      </Box>
    </Box>
  )
}

export default About