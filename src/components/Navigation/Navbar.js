import React from 'react';
import { COLORS } from '../../styles';
import Button from '../Button.component/Button';
import './navbar.scss';

const Navbar = () => {
    return (
        <div className="c-navbar">
            <div className="c-nav-logo">CryptoLock</div>
           <div style={{color:COLORS.minor,fontSize:"x-large"}}>
               |
               </div> 
            <ul className="c-nav-group">
                <li href="/exchange">Exchange</li>
                <li>Buy Crypto</li>
                <li>Market</li>
                <li>Discover</li>
            </ul>
            <div className="c-nav-btn-group">
                <select className="c-nav-menu">
                    <option>EN/USD</option>
                    <option>IND/RS</option>
                </select>
                <Button color={COLORS.light}  backgroundColor={COLORS.blue}>Sign up</Button>
                <Button color={COLORS.light} backgroundColor={COLORS.primary} borderColor={COLORS.minor}>Wallet</Button>
            </div>
        </div>
    );
};

export default Navbar;