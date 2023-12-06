import './main-header.css';

export const MainHeader = (props) => {
  const { children } = props;
  return <header className='main-header'>{children}</header>;
};
