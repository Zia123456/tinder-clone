import React from 'react';
import './Header.css';
import Person2Icon from '@mui/icons-material/Person2';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
import Logo from './images/tinder-logo.png';

function Hedear() {
  return (
    <div className="header">
      <IconButton>
        <Person2Icon fontSize="large" className="header__icon" />
      </IconButton>
      <img className="header__logo" src={Logo} alt="logo" />
      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Hedear;
