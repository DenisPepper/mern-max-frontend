import { Link } from 'react-router-dom';
import './main-navigation.css';
import { MainHeader } from './main-header.js';
import { NavLinks } from './nav-links.js';
import { SideDrawer } from './side-drawer.js';

export const MainNavigation = (props) => {
  //const {} = props;
  return (
    <>
      <SideDrawer>
        <nav className='main-navigation__drawer-nav'>
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className='main-navigation__menu-btn'>
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
