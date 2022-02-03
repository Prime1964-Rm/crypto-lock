import React from 'react';
import Badge from '../../../../components/Badge'
import { Bitcoin } from '../../../../assets';
import CustChart from '../../../../components/CustChart';
import './crypto-card.scss'

  
const CryptoCard = () => {
    return (
        <div className="crypto-card">
            <div className="crypto-card-header-section">
            <img src={Bitcoin}/>
            <h5>BTC/USDT</h5>
            <CustChart width={100} height={"50px"}/>
            </div>
            <div className="cryto-card-info-block">
                <h4>36,641.01 <Badge fontSize="small" fontWeight="500" background="#58bd7d">+24%</Badge></h4>
                <small>36,641.21</small>

            </div>
        </div>
    );
};

export default CryptoCard;