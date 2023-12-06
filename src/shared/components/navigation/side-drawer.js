import './side-drawer.css';
import { createPortal } from 'react-dom';

export const SideDrawer = (props) => {
  const { children } = props;
  const content = <aside className='side-drawer'>{children}</aside>;
  return createPortal(content, document.getElementById('drawer-hook'));
};
