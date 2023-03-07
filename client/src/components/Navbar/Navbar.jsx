import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';
import ATYPES from '../../store/types';

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [activeItem, setActiveItem] = useState('homepage');

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  const handleSignOut = async () => {
    await fetch('/auth/signout', {
      credentials: 'include',
    });
    dispatch({ type: ATYPES.SIGN_OUT_USER });
    navigate('/');
  };

  const isAuth = useSelector((state) => state.isAuth);

  return (
    <Segment inverted>
      <Menu inverted pointing secondary>
        { isAuth && (
        <>
          <Link to="/">
            <Menu.Item
              name="homepage"
              active={activeItem === 'homepage'}
              onClick={handleItemClick}
            />
          </Link>
          <Link to="/profile">
            <Menu.Item
              name="profile"
              active={activeItem === 'profile'}
              onClick={handleItemClick}
            />
          </Link>
          <Menu.Item
            name="signout"
            active={activeItem === 'signout'}
            onClick={handleSignOut}
          />
        </>
        )}
        { !isAuth && (
        <>
          <Link to="/signin">
            <Menu.Item
              name="signin"
              active={activeItem === 'signin'}
              onClick={handleItemClick}
            />
          </Link>
          <Link to="/signup">
            <Menu.Item
              name="signup"
              active={activeItem === 'signup'}
              onClick={handleItemClick}
            />
          </Link>
        </>
        )}
      </Menu>
    </Segment>
  );
}
