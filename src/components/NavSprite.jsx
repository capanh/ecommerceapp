import React from "react";
import { useState } from "react";

const NavSprite = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <nav className="nav-sprite">
        <ul className="nav-sprite-list">
          <li className="nav-sprite-item" onClick={toggleDrawer}>
            <a href="/home" className="nav-sprite-link onClick={toggleDrawer} ">
              Tümü
            </a>
            <div
              className={`overlay ${isOpen ? "active" : ""}`}
              onClick={toggleDrawer}
            ></div>
            <div className={`nav-drawer ${isOpen ? "open" : ""}`}>
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
          </li>

          <li className="nav-sprite-item">
            <a href="/home" className="nav-sprite-link">
              Satış Yap
            </a>
          </li>
          <li className="nav-sprite-item">
            <a href="/home" className="nav-sprite-link">
              Günün Fırsatları
            </a>
          </li>
          <li className="nav-sprite-item">
            <a href="/home" className="nav-sprite-link">
              Tekrar Satın Al
            </a>
          </li>
          <li className="nav-sprite-item">
            <a href="/home" className="nav-sprite-link">
              Prime
            </a>
          </li>
          <li className="nav-sprite-item">
            <a href="/home" className="nav-sprite-link">
              Ev Yaşam
            </a>
          </li>
          <li className="nav-sprite-item">
            <a href="/home" className="nav-sprite-link">
              Çok Satanlar
            </a>
          </li>
          <li className="nav-sprite-item">
            <a href="/home" className="nav-sprite-link">
              Elektronik
            </a>
          </li>
          <li className="nav-sprite-item">
            <a href="/home" className="nav-sprite-link">
              Moda
            </a>
          </li>
          <li className="nav-sprite-item">
            <a href="/home" className="nav-sprite-link">
              Müşteri Hizmetleri
            </a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default NavSprite;
