import React from 'react';

const Navbar = () => {
  const navStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px',
    borderRadius: '15px',
    margin: '10px',
  };

  const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    padding: 0,
    margin: 0,
  };

  const liStyle = {
    padding: '8px 16px',
    borderRadius: '8px',
    transition: 'background-color 0.3s',
    cursor: 'pointer', // This changes the cursor to a pointer on hover
  };

  const handleClick = (event) => {
    console.log(`Clicked on ${event.target.textContent}`);
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle} onClick={handleClick}>
          Home
        </li>
        <li style={liStyle} onClick={handleClick}>
          About
        </li>
        <li style={liStyle} onClick={handleClick}>
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
