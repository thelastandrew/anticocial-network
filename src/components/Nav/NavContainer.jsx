import Nav from './Nav';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  friends: state.sideBar.friends,
});

const NavContainer = connect(mapStateToProps)(Nav);

export default NavContainer;
