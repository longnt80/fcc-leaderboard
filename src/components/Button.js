import React from 'react';

const Button = ({name, whenClicked}) => <button onClick={whenClicked}>{name}</button>;

export default Button;
