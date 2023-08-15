import React, { useState } from 'react';

const NavDrawer = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={toggleDrawer}></div>
      <div className={`nav-drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-content">
          <h2>Navigation</h2>
          <ul>
            <li>öne çıkanlar</li>
            <li>Çok Satanlar</li>
            <li>Yeni Çıkanlar</li>
            <li>En İyi Performans Gösterenler</li>
            <li>kategoriye göre alışveriş yap</li>
            <ul>
              <li>Ayakkabı</li>
              <li>Bahçe</li>
              <li>Bebek</li>
              {/* ... Other categories */}
            </ul>
            <li>tümünü görüntüle</li>
            <li>yardım ve ayarlar</li>
            <li>Hesabım</li>
            <li>Müşteri Hizmetleri</li>
            <li>Çıkış Yapın</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavDrawer;