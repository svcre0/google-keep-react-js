import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewListIcon from '@mui/icons-material/ViewList';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo-area">
        <div className="tooltip">
          <span className="material-symbols-outlined hover">
            <MenuIcon />
          </span>
        </div>
        <img
          className="gb_Hc gb_Hd"
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          srcSet="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png 2x"
          alt=""
          aria-hidden="true"
          role="presentation"
        />
        <span className="logo-text">Keep</span>
      </div>
      <div className="search-area">
        <div className="tooltip">
          <span className="material-symbols-outlined hover">
            <SearchIcon />
          </span>
          <span className="tooltip-text">Search</span>
        </div>
        <input type="text" placeholder="Search" />
      </div>
      <div className="settings-area">
        <div className="tooltip">
          <span className="material-symbols-outlined hover">
            <RefreshIcon />
          </span>
          <span className="tooltip-text">Refresh</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover">
            <ViewListIcon />
          </span>
          <span className="tooltip-text">View List</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover">
            <SettingsIcon />
          </span>
          <span className="tooltip-text">Settings</span>
        </div>
      </div>
      <div className="profile-actions-area">
        <div className="tooltip">
          <span className="material-symbols-outlined hover">
            <AppsIcon />
          </span>
          <span className="tooltip-text">Apps</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover">
            <AccountCircleIcon />
          </span>
          <span className="tooltip-text">Accounts</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
