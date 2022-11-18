import { StoreContext } from '../../StoreContext';
import Nav from './Nav';

const NavContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        const friends = store.getState().sideBar.friends;
        return <Nav friends={friends} />;
      }}
    </StoreContext.Consumer>
  );
};

export default NavContainer;
