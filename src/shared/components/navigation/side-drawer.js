import './side-drawer.css';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

export const SideDrawer = (props) => {
  const { children, show, clickHandler } = props;
  const content = (
    <CSSTransition
      in={show}
      timeout={500}
      classNames={'slide-in-left'}
      mountOnEnter
      unmountOnExit
    >
      <aside className='side-drawer' onClick={clickHandler}>
        {children}
      </aside>
    </CSSTransition>
  );
  return createPortal(content, document.getElementById('drawer-hook'));
};
