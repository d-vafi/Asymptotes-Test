
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
// import DirectionsIcon from "@mui/icons-material/Directions";
// import MapIcon from "@mui/icons-material/Map";
// import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";

// const BottomNav = () => {
//   const [activeTab, setActiveTab] = useState("Map"); // Default active tab
//   const [openMapMenu, setOpenMapMenu] = useState(false);
//   const [selectedCampus, setSelectedCampus] = useState("SGW Campus");

//   const handleSelectCampus = (campus: string) => {
//     setActiveTab("Map");
//     setSelectedCampus(campus);
//     setOpenMapMenu(false); // Close menu after selection
//   };

//   return (
//     <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 shadow-lg">
//       <ul className="flex justify-around items-center py-3">
//         <NavItem
//           name="Shuttle"
//           href="/shuttle"
//           icon={<DirectionsBusIcon />}
//           activeTab={activeTab}
//           setActiveTab={setActiveTab}
//         />
//         <NavItem
//           name="Directions"
//           href="/directions"
//           icon={<DirectionsIcon />}
//           activeTab={activeTab}
//           setActiveTab={setActiveTab}
//         />

//         {/* Map button with dropdown */}
//         <li className="relative">
//           <button
//             onClick={() => setOpenMapMenu(!openMapMenu)}
//             className={`flex flex-col items-center ${
//               activeTab === "Map" ? "text-[#0096d7]" : "text-gray-700 hover:text-black"
//             }`}
//           >
//             <MapIcon />
//             <span>Map</span>
//           </button>

//           {/* Dropdown menu */}
//           {openMapMenu && (
//             <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-white border rounded-lg shadow-lg w-48">
//               <button
//                 className={`w-full px-4 py-2 text-left ${
//                   selectedCampus === "SGW Campus" ? "bg-blue-100" : "hover:bg-gray-100"
//                 }`}
//                 onClick={() => handleSelectCampus("SGW Campus")}
//               >
//                 SGW Campus
//               </button>
//               <button
//                 className={`w-full px-4 py-2 text-left ${
//                   selectedCampus === "Loyola Campus" ? "bg-blue-100" : "hover:bg-gray-100"
//                 }`}
//                 onClick={() => handleSelectCampus("Loyola Campus")}
//               >
//                 Loyola Campus
//               </button>
//             </div>
//           )}
//         </li>

//         <NavItem
//           name="Explore"
//           href="/explore"
//           icon={<StarBorderRoundedIcon />}
//           activeTab={activeTab}
//           setActiveTab={setActiveTab}
//         />
//       </ul>
//     </nav>
//   );
// };

// const NavItem = ({
//   name,
//   href,
//   icon,
//   activeTab,
//   setActiveTab,
// }: {
//   name: string;
//   href: string;
//   icon: JSX.Element;
//   activeTab: string;
//   setActiveTab: (tab: string) => void;
// }) => (
//   <li>
//     <Link
//       to={href}
//       onClick={() => setActiveTab(name)}
//       className={`flex flex-col items-center ${
//         activeTab === name ? "text-[#0096d7]" : "text-gray-700 hover:text-black"
//       }`}
//     >
//       {icon}
//       <span>{name}</span>
//     </Link>
//   </li>
// );

// export default BottomNav;

import MapRounded from '@mui/icons-material/MapRounded';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import DirectionsRoundedIcon from '@mui/icons-material/DirectionsRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
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

const menuMapElement = document.getElementById('menu-map-1');


export default function BottomNavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [openMapMenu, setOpenMapMenu] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <div id='menu-map-1' className='hidden flex-col justify-center items-center h-16 w-full left-0 top-0'>
          <li id = 'sgw-campus-option' className='flex'>
            <a href="/">
              SGW Campus
            </a>
          </li>
          <li id = 'loyola-campus-option' className='flex bg-gray-400'>
            <a href="/">
              Loyola Campus
            </a>
          </li>
        </div>

        <BottomNavigation
          showLabels
          value={location.pathname}
          onChange={(event, newValue) => {
            
            //when the map icon is clicked, display the menu
            if (newValue === "/") {
              if (menuMapElement) {

                //if map menu already opened, close it, else open it
                if(openMapMenu){
                  menuMapElement.style.display = 'none';
                  setOpenMapMenu(false);
                }else{
                  menuMapElement.style.display = 'flex';
                  setOpenMapMenu(true);
                }
              
              }
              // navigate(newValue);
              //else, if we click on another menu and the menu was open, close it. 
            } else {
              if (menuMapElement) {
                menuMapElement.style.display = 'none';
              }
              navigate(newValue);
            }

          }}>

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
