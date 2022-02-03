import React from "react";
import { typography } from "../../styles";
import './button.scss'

const Button = ({ color, backgroundColor,padding="0.7rem 1rem",children, borderColor,size='sm',fontWeight,borderRadius='3rem' }) => {
  const styleSheet = {
    color: color,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
    border: `1px solid ${borderColor}80`,
    padding:padding,
    fontWeight:fontWeight,
    cursor:"pointer"
  };
  return <button className={`cust-Button ${size}`} style={styleSheet}>{children}</button>;
};

export default Button;
