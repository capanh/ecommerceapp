import React from 'react';

const NavGlobalLocationSlot = () => {
  return (
    <div className="nav-global-location-slot">
      <div className="nav-global-location-slot__icon">
        <img
          src="./img/locationIcon.png"
          alt="Location Icon"
        />
      </div>
      <div className="nav-global-location-slot__content">
        <span className="nav-global-location-slot__label">Deliver to</span>
        <span className="nav-global-location-slot__location">New York</span>
      </div>
    </div>
  );
};

export default NavGlobalLocationSlot;