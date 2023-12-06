import { useState } from 'react';
import { Link } from 'react-router-dom';
import './main-navigation.css';
import { MainHeader } from './main-header.js';
import { NavLinks } from './nav-links.js';
import { SideDrawer } from './side-drawer.js';
import { Backdrop } from '../ui-elements/backdrop.js';

export const MainNavigation = (props) => {
  //const {} = props;
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawer = () => setDrawerIsOpen(true);

  const closeDrawer = () => setDrawerIsOpen(false);

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
      {drawerIsOpen && (
        <SideDrawer>
          <nav className='main-navigation__drawer-nav'>
            <NavLinks />
          </nav>
        </SideDrawer>
      )}
      <MainHeader>
        <button className='main-navigation__menu-btn' onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className='main-navigation__title'>
          <Link to='/'>Your places</Link>
        </h1>
        <nav className='main-navigation__header-nav'>
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};
