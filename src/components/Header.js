import React from 'react';
import Button from './Button';

const Header = ({whenBtnClicked}) =>
(
  <div className="header">
    <Button name='All Time' whenClicked={whenBtnClicked} />
    <Button name='Recent' whenClicked={whenBtnClicked} />
  </div>
)


export default Header;
