import React from 'react';

const Button = ({name, showName}) => <button onClick={showName}>{name}</button>;

export default Button;
