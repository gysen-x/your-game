import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('homepage');

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  return (
    <Segment inverted>
      <Menu inverted pointing secondary>
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
        <Link to="/ques">
          <Menu.Item
            name="ques"
            active={activeItem === 'signup'}
          />
        </Link>
      </Menu>
    </Segment>
  );
}
