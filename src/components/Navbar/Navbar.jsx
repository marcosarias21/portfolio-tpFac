import { AppBar, Box, Link, Typography } from "@mui/material"
import AddHomeIcon from '@mui/icons-material/AddHome';
import { useState } from "react";


const Navbar = () => {
  const [isShowIcon, setIsShowIcon] = useState(false)
  console.log(isShowIcon)
  return (
    <Box>
      <AppBar sx={{ display: 'flex',flexDirection: 'column', justifyContent:'space-between', height: "100vh", width: '100px', zIndex: 1, left: 1, transition: "0.3s ease", ":hover": { width: '220px' }}} position="fixed" height={'100%'} onMouseEnter={() => setIsShowIcon(true)} onMouseLeave={() => setIsShowIcon(false)} >
        <Box>
          <Typography variant="h5" fontWeight={'bold'} paddingY={2} textAlign={"center"} component="div" sx={{ flexGrow: 1 }}>
             {isShowIcon ? " M.Arias": 'M.A' }
          </Typography>
        </Box>
        <Box paddingLeft={2} gap={3} width={'60%'}>
            <Link sx={{ color: 'white', display: 'flex', padding: '0px 20px', ":hover": { backgroundColor: "#6994e4", color: 'white', boxShadow: "0 14px 28px rgba(0, 0, 0, 0.2)",  padding: "10px 20px", borderRadius: "10px", transitionDuration: "0.25s", width: '150px' } }} href=""><AddHomeIcon sx={{ verticalAlign: 'middle', fontSize: '25px', mr: '10px' }} /> {isShowIcon ?  <Typography sx={{ transitionDuration: '0.2s', transitionDelay: '1.2s', fontWeight: 'bold', fontSize: '16px' }} component={'span'}>Home</Typography> : '' } </Link>        
        </Box>           
        <Box>
          Futuro Switch
        </Box>
      </AppBar>
    </Box>
  )
}

export default Navbar