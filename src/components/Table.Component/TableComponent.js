import React from 'react';
import UpDownArrow from '../UpDownArrow';
import './table-component.scss'

const TableComponent = () => {
    return (
        <div className="table-container">
            <table className="table">
                <tr className="table-head">
                    <th># <UpDownArrow className="t-filter"/></th>
                    <th>Name <UpDownArrow className="t-filter"/></th>
                    <th>Price <UpDownArrow className="t-filter"/></th>
                    <th>24h % </th>
                    <th>7d %</th>
                    <th>Marketcap $</th>
                    <th>Volume(24h)</th>
                    <th>Chart</th>
                </tr>
                <tr className="table-body">

                </tr>
            </table>
            
        </div>
    );
};

export default TableComponent;