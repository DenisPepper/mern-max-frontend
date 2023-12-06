import { Link } from 'react-router-dom';
import './main-navigation.css';
import { MainHeader } from './main-header.js';
import { NavLinks } from './nav-links.js';

export const MainNavigation = (props) => {
  //const {} = props;
  return (
    <MainHeader>
      <button className='main-navigation__menu-btn'>
        <span />
        <span />
        <span />
      </button>
      <h1 className='main-navigation__title'>
        <Link to='/'>Your places</Link>
      </h1>
      <nav>
        <NavLinks />
      </nav>
    </MainHeader>
  );
};
