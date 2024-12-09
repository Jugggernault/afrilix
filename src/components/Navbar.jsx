import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, CompassIcon, TvIcon, HeartIcon, UserIcon } from 'lucide-react';

const NavItem = ({ to, icon: Icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex flex-col items-center justify-center px-3 py-1 ${
        isActive ? 'text-primary' : 'text-gray-400'
      }`}
    >
      <Icon className="w-6 h-6" />
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
};

const Navbar = () => {
  const menuItems = [
    { to: '/', icon: HomeIcon, label: 'Accueil' },
    { to: '/explorer', icon: CompassIcon, label: 'Explorer' },
    { to: '/watch', icon: TvIcon, label: 'TV' },
    { to: '/favoris', icon: HeartIcon, label: 'Favoris' },
    { to: '/compte', icon: UserIcon, label: 'Compte' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-white/10">
      <div className="flex justify-around items-center h-16">
        {menuItems.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
