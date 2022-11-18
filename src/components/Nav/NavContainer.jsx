import Nav from './Nav';

const NavContainer = (props) => {
  const friends = props.store.getState().sideBar.friends;

  return <Nav friends={friends} />
};

export default NavContainer;
