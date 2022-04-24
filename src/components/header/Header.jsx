import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils.js';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../../redux/user/userSlice';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

function Header() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      dispatch(setCurrentUser(user));
    });
  }, [dispatch]);

  return (
    <div className="header">
      <Link to={'/'}>
        <Logo className="logo" />
      </Link>
      <div className="options">
        {navLinks.map((link, idx) => (
          <NavLink key={idx} className="option" to={`${link}`}>
            {link.replace(/-/g, ' ').toUpperCase()}
          </NavLink>
        ))}

        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <NavLink className={'option'} to={'sign-in'}>
            SIGN IN
          </NavLink>
        )}
        <CartIcon />
      </div>
      <CartDropdown />
    </div>
  );
}

export default Header;

const navLinks = ['shop', 'contact'];
