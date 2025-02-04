import MapRounded from '@mui/icons-material/MapRounded';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import DirectionsRoundedIcon from '@mui/icons-material/DirectionsRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BottomNavigation, BottomNavigationAction, ThemeProvider, createTheme } from '@mui/material';



const theme = createTheme({
  components: {
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          color: "#757575", // Default color
          "&.Mui-selected": {
            background: "#0096d7", // Accent color of background when selected
            color: "#fff", // Accent color of text when selected
          },
        },
      },
    },
  },
});




const  BottomNavBar = () => {
  const menuMapElement = document.getElementById('menu-map');
  const navigate = useNavigate();
  const location = useLocation();
  const [openMapMenu, setOpenMapMenu] = useState(false);

  
  //this is to save the state openMapMenu when the menu is closed and the user clicks on another menu
  // useEffect(() => {
  //   console.log("openMapMenu in useEffect: ", openMapMenu);
  //   localStorage.setItem('openMapMenu', openMapMenu.toString());
    
  // }, [openMapMenu]);

  // //this is to get the map menu when the page is refreshed
  // useEffect(() => {
  //   console.log("menuMapElement in useEffect: ", menuMapElement);
  //   const savedOpenMapMenu = localStorage.getItem('openMapMenu') === 'true';
  //   setOpenMapMenu(savedOpenMapMenu);
  //   if (savedOpenMapMenu && menuMapElement) {
  //     menuMapElement.style.display = 'flex';
  //   }
  // }, [menuMapElement])

  return (
    
    <ThemeProvider theme={theme}>
      <div>

        {/* this is the menu that appears when the map icon is clicked */}
        {openMapMenu && (
        <div id='menu-map' className='flex flex-col justify-center items-center w-full black '>
          <li id = 'sgw-campus-option' className='flex w-full p-2'>
            <a href="/">
              SGW Campus
            </a>
          </li>
          <li id = 'loyola-campus-option' className='flex w-full p-2  bg-gray-400'>
            <a href="/">
              Loyola Campus
            </a>
          </li>
        </div>
        )}

        <BottomNavigation
          showLabels
          value={location.pathname}
          onChange={(event, newValue) => {
            if (newValue === '/') {
              setOpenMapMenu((prev) => !prev);
              
            } else {
              setOpenMapMenu(false);
              navigate(newValue);
            }
          }}
          >

          
          <BottomNavigationAction
            label="Shuttle"
            icon={<DirectionsBusIcon />}
            value="/shuttle" />

          <BottomNavigationAction
            label="Map"
            icon={<MapRounded />}
            value="/" />

          <BottomNavigationAction
            label="Directions"
            value="/directions"
            icon={<DirectionsRoundedIcon />} />

          <BottomNavigationAction
            label="Schedule"
            value="/schedule"
            icon={<CalendarMonthRoundedIcon />} />

        </BottomNavigation>
      </div>
    </ThemeProvider>

  );
}

export default BottomNavBar;