// import { Link } from "react-router-dom";
// import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
// import DirectionsIcon from '@mui/icons-material/Directions';
// import MapIcon from '@mui/icons-material/Map';
// import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
// import { useState } from "react";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";



// const BottomNavBar = () => {
//     const [activeTab, setActiveTab] = useState("Map");
//     const [openMenu, setOpenMenu] = useState(false);
//     const [selectedCampus, setSelectedCampus] = useState("SGW Campus");

//     return (
//         <nav className='w-full flex  justify-evenly border-blue-500 border fixed bottom-0 bg-white'  >
//             <ul className="flex w-full justify-evenly py-3">
//                 <li className="relative">
//                     <Link to='/' className=' flex  flex-col  items-center p-2 bg-grey-200  border'>
//                         <DirectionsBusIcon sx={{ color: "black" }} />
//                         Shuttle
//                     </Link>
//                 </li>

//                 <li className="relative">
//                     <Link to='/' className=' flex  flex-col  items-center p-2 bg-grey-200  border'>
//                         <DirectionsIcon sx={{ color: "black" }} />
//                         Directions
//                     </Link>
//                 </li>

//                 <li className={`relativeactiveTab === "Map" ? "bg-[#0096d7]" : "text-gray-700 hover:text-black"
//                           }`} >
//                     <button
//                         onClick={() => setOpenMenu(!openMenu)}
//                         className={`flex flex-col items-center ${
//                             activeTab === "Map" ? "bg-[#0096d7]" : "text-gray-700 hover:text-black"
//                           }`}>
//                         <MapIcon sx={{ color: "black" }} />
//                         <span>Map</span>
//                     </button>
                    



//                 </li>

//                 <li className="relative">
//                     <Link to='/' className='flex flex-col items-center p-2 bg-grey-200  border'>
//                         <StarBorderRoundedIcon sx={{ color: "black" }} />
//                         Explore
//                     </Link>
//                 </li>
//             </ul>
//         </nav>
//     );
// }


// export default BottomNavBar;

import { useState } from "react";
import { Link } from "react-router-dom";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import DirectionsIcon from "@mui/icons-material/Directions";
import MapIcon from "@mui/icons-material/Map";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";

const BottomNav = () => {
  const [activeTab, setActiveTab] = useState("Map"); // Default active tab
  const [openMapMenu, setOpenMapMenu] = useState(false);
  const [selectedCampus, setSelectedCampus] = useState("SGW Campus");

  const handleSelectCampus = (campus: string) => {
    setActiveTab("Map");
    setSelectedCampus(campus);
    setOpenMapMenu(false); // Close menu after selection
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 shadow-lg">
      <ul className="flex justify-around items-center py-3">
        <NavItem
          name="Shuttle"
          href="/shuttle"
          icon={<DirectionsBusIcon />}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <NavItem
          name="Directions"
          href="/directions"
          icon={<DirectionsIcon />}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        
        {/* Map button with dropdown */}
        <li className="relative">
          <button
            onClick={() => setOpenMapMenu(!openMapMenu)}
            className={`flex flex-col items-center ${
              activeTab === "Map" ? "text-[#0096d7]" : "text-gray-700 hover:text-black"
            }`}
          >
            <MapIcon />
            <span>Map</span>
          </button>

          {/* Dropdown menu */}
          {openMapMenu && (
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-white border rounded-lg shadow-lg w-48">
              <button
                className={`w-full px-4 py-2 text-left ${
                  selectedCampus === "SGW Campus" ? "bg-blue-100" : "hover:bg-gray-100"
                }`}
                onClick={() => handleSelectCampus("SGW Campus")}
              >
                SGW Campus
              </button>
              <button
                className={`w-full px-4 py-2 text-left ${
                  selectedCampus === "Loyola Campus" ? "bg-blue-100" : "hover:bg-gray-100"
                }`}
                onClick={() => handleSelectCampus("Loyola Campus")}
              >
                Loyola Campus
              </button>
            </div>
          )}
        </li>

        <NavItem
          name="Explore"
          href="/explore"
          icon={<StarBorderRoundedIcon />}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>
    </nav>
  );
};

const NavItem = ({
  name,
  href,
  icon,
  activeTab,
  setActiveTab,
}: {
  name: string;
  href: string;
  icon: JSX.Element;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => (
  <li>
    <Link
      to={href}
      onClick={() => setActiveTab(name)}
      className={`flex flex-col items-center ${
        activeTab === name ? "text-[#0096d7]" : "text-gray-700 hover:text-black"
      }`}
    >
      {icon}
      <span>{name}</span>
    </Link>
  </li>
);

export default BottomNav;
