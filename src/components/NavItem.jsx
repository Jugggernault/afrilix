import React from 'react';

const NavItem = ({ icon: Icon, label, isActive, onClick }) => {
  return (
    <button
      className={`flex flex-col items-center justify-center px-3 py-1 ${
        isActive ? 'text-primary' : 'text-gray-400'
      }`}
      onClick={onClick}
    >
      <Icon className="w-6 h-6" />
      <span className="text-xs mt-1">{label}</span>
    </button>
  );
};

export default NavItem;
