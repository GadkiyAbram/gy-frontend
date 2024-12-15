import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './styles.module.css';
import mainLogo from '../../img/logos/Gyrodata_Logo.jpg';

const Sidebar = () => {
  const menuItems = [
    { label: 'Main', link: '/' },
    { label: 'Tools', link: '/tools' },
    { label: 'Batteries', link: '/batteries' },
    { label: 'Jobs', link: '/jobs' },
    { label: 'Personnel', link: '/personnel' }
  ];

  return (
    <div className={s.sidebar}>
      <div className={s.sidebarHeader}>
        <img
          src={mainLogo}
          className={s.mainLogo}
          alt={'Application main logo'}
        />
      </div>
      <ul className={s.menuList}>
        {
          menuItems.map(({link, label}, index) => (
            <li key={index} className={s.menuItem}>
              <NavLink to={link}>
                {label}
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Sidebar;