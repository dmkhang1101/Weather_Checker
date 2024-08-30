import './App.css';
import * as React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home.js'
import Result from './pages/Result/Result.js'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Menu from '@mui/material/Menu';
import { useNavigate } from 'react-router-dom';

function Header(){
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <AppBar position="sticky">
        <Toolbar>
          <div>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
            sx={{ mr: 2 }}
          >
            <InfoIcon/>
          </IconButton>

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
          <Typography sx={{ width : 290, p: 3 }}>
            The Product Manager Accelerator Program is designed to support PM professionals through every stage of their career. From students looking for entry-level jobs to Directors looking to take on a leadership role, our program has helped over hundreds of students fulfill their career aspirations.
          </Typography>
          </Menu>
          </div>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Designed By Khang Do
          </Typography>
          <Button color="inherit" onClick ={() => navigate('/')}>Home</Button>
        </Toolbar>
      </AppBar>
  );
}

function App() {
  return (
    <div>
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path='/' element ={<Home/>}/>
                <Route path='result' element = {<Result/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
