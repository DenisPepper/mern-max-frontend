import './side-drawer.css';

export const SideDrawer = (props) => {
  const { children } = props;
  return <aside className='side-drawer'>{children}</aside>;
};
