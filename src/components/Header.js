import React from 'react';
import Button from './Button';

const Header = ({showBtn}) =>
(
  <div className="header">
    <Button name='All Time' showName={showBtn} />
    <Button name='Recent' showName={showBtn} />
  </div>
)


export default Header;
