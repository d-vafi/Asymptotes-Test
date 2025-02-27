import React, { useState, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Bus, Map, Navigation, Calendar } from 'lucide-react';

const BottomNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openMapMenu, setOpenMapMenu] = useState(false);

  const mapLabel = useMemo(() => {
    if (location.pathname === '/') return 'Map: SGW';
    if (location.pathname === '/LOYcampus') return 'Map: Loyola';
    return 'Map';
  }, [location.pathname]);

  const handleNavigation = (value: string) => {
    if (value === '/') {
      setOpenMapMenu((prev) => !prev);
    } else {
      if (openMapMenu) setOpenMapMenu(false);
      navigate(value);
    }
  };

  const NavButton = ({ icon: Icon, label, value, isActive }: { icon: React.ElementType; label: string; value: string; isActive: boolean }) => (
    <button
      onClick={() => handleNavigation(value)}
      aria-label={label}
      aria-current={isActive ? 'page' : undefined}
      className={`flex flex-1 flex-col items-center justify-center px-2 py-1 transition-all duration-300
        ${isActive ? 'text-white bg-gradient-to-r from-[#4361ee] to-[#7209b7]' : 'text-gray-500'}
        hover:text-white hover:bg-gradient-to-r hover:from-[#4361ee] hover:to-[#7209b7] hover:bg-opacity-80`}
    >
      <Icon className={`h-6 w-6 mb-1 transition-all duration-300 ${isActive ? 'scale-110' : 'scale-100'}`} />
      <span className="text-xs font-medium">{label}</span>
    </button>
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      {openMapMenu && (
        <div className="bg-white shadow-lg animate-slide-up">
          <button
            onClick={() => navigate('/')}
            className="w-full p-3 text-left hover:bg-gradient-to-r hover:from-[#4361ee] hover:to-[#7209b7] hover:text-white transition-colors"
          >
            SGW Campus
          </button>
          <button
            onClick={() => navigate('/LOYcampus')}
            className="w-full p-3 text-left hover:bg-gradient-to-r hover:from-[#4361ee] hover:to-[#7209b7] hover:text-white transition-colors"
          >
            Loyola Campus
          </button>
        </div>
      )}

      <nav className="flex h-16 bg-white shadow-lg backdrop-blur-md">
        <NavButton icon={Bus} label="Shuttle" value="/shuttle" isActive={location.pathname === '/shuttle'} />
        <NavButton icon={Map} label={mapLabel} value="/" isActive={location.pathname === '/' || location.pathname === '/LOYcampus'} />
        <NavButton icon={Navigation} label="Directions" value="/directions" isActive={location.pathname === '/directions'} />
        <NavButton icon={Calendar} label="Schedule" value="/schedule" isActive={location.pathname === '/schedule'} />
      </nav>
    </div>
  );
};

export default BottomNavBar;
