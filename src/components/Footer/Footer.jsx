import { Box, IconButton, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {
  return (
    <footer style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex' }}>
        <IconButton target="_blank" href="https://github.com/marcosarias21" color={'inherit'}><GitHubIcon /></IconButton>
        <IconButton target="_blank" href="https://www.linkedin.com/in/marcos-ar/" color="primary"><LinkedInIcon /></IconButton>
      </Box>
      <Box>
        <Typography variant="h6" fontWeight={'bold'}>@Marcos Arias - 2024</Typography>
      </Box>

    </footer>
  )
}

export default Footer