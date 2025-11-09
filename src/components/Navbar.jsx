import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import "../Styles/NavbarStyles.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="nav-logo">TTM Konnect</div>

        {/* Mobile Toggle */}
        <button className="nav-toggle" onClick={() => setDrawerOpen(true)}>
          <MenuIcon style={{ fontSize: "26px" }} />
        </button>

        {/* Desktop Nav */}
        <nav className="nav-links desktop-nav">
          <a href="#" className="navbar-options">Home</a>
          <a href="#" className="navbar-options">About</a>

          <div className="nav-dropdown">
            <span>Services ▾</span>
            <div className="dropdown-menu">
              <a href="#">Fleet Management</a>
              <a href="#">Route Optimization</a>
              <a href="#">Real-Time Tracking</a>
              <a href="#">Analytics Dashboard</a>
            </div>
          </div>

          <a href="#" className="navbar-options">Contact</a>
          <button className="nav-cta">Get Started</button>
        </nav>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <div className="drawer">
            <button className="drawer-close" onClick={() => setDrawerOpen(false)}>
              <CloseIcon style={{ fontSize: "26px" }} />
            </button>

            <a href="#">Home</a>
            <a href="#">About</a>

            <div
              className="drawer-service-item"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services ▾
            </div>

            {servicesOpen && (
              <div className="drawer-submenu">
                <a href="#">Fleet Management</a>
                <a href="#">Route Optimization</a>
                <a href="#">Real-Time Tracking</a>
                <a href="#">Analytics Dashboard</a>
              </div>
            )}

            <a href="#">Contact</a>

            <button className="nav-cta drawer-cta">Get Started</button>
          </div>
        </Drawer>
      </div>
    </header>
  );
}