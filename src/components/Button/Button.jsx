import React from 'react';

const Button = ({ children, onClick }) => (
  <button className="botao" onClick={() => onClick(children)}>
    {children}
  </button>
);

export default Button;