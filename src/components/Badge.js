import React from "react";
import { COLORS, typography } from "../styles";
import Typography from "./Typography";

const Badge = ({
  fontWeight=600,
  preContent,
  children,
  postContent,
  color = COLORS.major,
  background = "green",
  fontSize = typography.secondary,
  padding="0.2rem 0.6rem"
}) => {
  const styleSheet = {
    fontSize:fontSize,
    borderRadius: "3rem",
    background: background,
    color: color,
    border:"none",
   fontWeight:fontWeight,
   padding:padding,
   textAlign: "center",
   textDecoration: "none",
   display: "inline-block",
   height:"fit-content",
   margin: "4px 2px"
  //  display:"flex",
  //  alignItems:"center",
  //  justifyContent:"center"
  };
  

  return (
      <div style={styleSheet}>
   
      {/* {preContent} */}
    
      {children}
     
      {/* {postContent} */}

      </div>
  );
};

export default Badge;
