import './main-navigation.js';
import { MainHeader } from './main-header.js';
import { Link } from 'react-router-dom';

export const MainNavigation = (props) => {
  const {} = props;
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
      <nav>...navigation</nav>
    </MainHeader>
  );
};
