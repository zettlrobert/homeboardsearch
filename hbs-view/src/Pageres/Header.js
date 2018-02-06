import React from 'react';
import classes from './CSS/Header.css';

const Header = () => {
  return (
    <div>

      <header className={classes.header}>
        <h1 className={classes.headline}>
          Homeboard Search
        </h1>
      </header>
    </div>

  );
}

export default Header;
