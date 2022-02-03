import React from 'react';
import './stepperbtn.scss'

const StepperBtn = ({iconStyle, iconClassName,step}) => {
    return (
        <div className="stepperbtn">
            {/* <Icon style={{position:"relative", width:"3rem", padding:"0.3rem",background:"#ffffff", borderRadius:"50%"}}/> */}
            <i className={iconClassName} style={iconStyle}></i>
            <label>{step}</label>
        </div>
    );
};

export default StepperBtn;