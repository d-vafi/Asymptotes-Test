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

const BottomNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openMapMenu, setOpenMapMenu] = useState(false);

  function addMapLabel() {
    if (location.pathname === "/") {
      return "Map: SGW";
    } else if (location.pathname === "/LOYcampus") {
      return "Map: Loyola";
    } else {
      return "Map";
    }
  }

  return (

    <ThemeProvider theme={theme}>
      <div id="bottomNavBar">

        {/* this is the menu that appears when the map icon is clicked */}
        {openMapMenu && (
          <div id='menu-map' className='flex flex-col justify-center items-center w-full  '>
            <li id='sgw-campus-option' className='flex justify-center w-full p-2 hover:bg-[#0096d7] '>
              <a href="/" className='w-full text-black hover:text-white'>
                SGW Campus
              </a>
            </li>
            <li id='loyola-campus-option' className='flex justify-center w-full p-2 hover:bg-[#0096d7]'>
              <a href="/LOYcampus" className='w-full text-black hover:text-white'>
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
            test-id="shuttle-button"
            label="Shuttle"
            icon={<DirectionsBusIcon />}
            value="/shuttle" />

          <BottomNavigationAction
            test-id="map-button"
            label={location.pathname === "/" ? "Map: SGW" : addMapLabel()}
            icon={<MapRounded />}
            value="/" />

          <BottomNavigationAction
            test-id="directions-button"
            label="Directions"
            value="/directions"
            icon={<DirectionsRoundedIcon />} />

          <BottomNavigationAction
            test-id="schedule-button"
            label="Schedule"
            value="/schedule"
            icon={<CalendarMonthRoundedIcon />} />

        </BottomNavigation>
      </div>
    </ThemeProvider>

  );
}

export default BottomNavBar;