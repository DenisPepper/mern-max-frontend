import { NavLink } from 'react-router-dom';
import './nav-links.css';

export const NavLinks = (props) => {
  //const {} = props;
  return (
    <ul className='nav-links'>
      <li>
        <NavLink to='/'>All users</NavLink>
      </li>
      <li>
        <NavLink to='/u1/places'>My places</NavLink>
      </li>
      <li>
        <NavLink to='/places/new'>Add place</NavLink>
      </li>
      <li>
        <NavLink to='/auth'>Auth</NavLink>
      </li>
    </ul>
  );
};
