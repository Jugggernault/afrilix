import React from 'react';
import NavItem from './NavItem';
import { HomeIcon, CompassIcon, TvIcon, HeartIcon, UserIcon } from 'lucide-react';

const Navbar = ({ activeMenu, setActiveMenu }) => {
  const menuItems = [
    { icon: HomeIcon, label: 'Accueil' },
    { icon: CompassIcon, label: 'Explorer' },
    { icon: TvIcon, label: 'TV' },
    { icon: HeartIcon, label: 'Favoris' },
    { icon: UserIcon, label: 'Compte' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-white/10">
      <div className="flex justify-around items-center h-16">
        {menuItems.map((item) => (
          <NavItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            isActive={activeMenu === item.label}
            onClick={() => setActiveMenu(item.label)}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

