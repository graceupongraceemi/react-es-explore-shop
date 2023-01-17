import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='leftr'>
          <div>
            <img src='/img/en.png' alt='' />
            <KeyboardArrowDownIcon />
          </div>
        </div>
        <div className='center'></div>
        <div className='right'></div>
      </div>
    </div>
  );
};

export default Navbar;
