import React from 'react';
import { COLORS } from '../styles';
import './Table.Component/table-component.scss'

const UpDownArrow = ({id,key,className}) => {
    
    return (
        <div className="updownarrow" id={id} key={key} >
            {/* <i class="fas fa-chevron-up"></i>
            <i class="fas fa-chevron-down"></i> */}
            <div className="arrow-up">{"<"}</div>
            <div className="arrow-down">{">"}</div>
        </div>
    );
};

export default UpDownArrow;