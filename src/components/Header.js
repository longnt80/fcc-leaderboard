import React from 'react';
// import Button from './Button';
import './Header.css';

const Header = ({whenBtnClicked,tableType}) => {
  if (tableType === 'alltime') {
    return (
      <div className="Header">
      <button className="active" onClick={whenBtnClicked} >All Time</button>
      <button onClick={whenBtnClicked} >Recent</button>
      </div>
    )
  }
  else {
    return (
      <div className="Header">
      <button onClick={whenBtnClicked} >All Time</button>
      <button className="active" onClick={whenBtnClicked} >Recent</button>  
      </div>
    )
  }
}


export default Header;
