import React, { useState } from 'react';
import {COLORS, typography }  from '../styles';

const Typography = ({children,type="primary",status="positive",fontWeight=400,fontSize=typography.x_large,style}) => {
    const styleSheet = {
        color:status==="positive"?COLORS.positive:status==="negative"?COLORS.negative:type==="secondary"?COLORS.minor:COLORS.major,
        fontSize:fontSize,
        fontWeight:fontWeight,
        height:"fit-content",
        display:"inline-block",
        padding:"0 0",
        margin:"0 0",
        ...style
    }
    return (
        <font style={styleSheet}>
            {children}
        </font>
    );
};

export default Typography;