import React from 'react';
import Badge from '../../components/Badge';
import Button from '../../components/Button.component/Button';
import TableComponent from '../../components/Table.Component/TableComponent';
import Typography from '../../components/Typography';
import UpDownArrow from '../../components/UpDownArrow';
import Navbar from '../../components/Navigation/Navbar'
import CryptoCard from '../Home/components/CryptoCard.Component/CryptoCard';

const ComponentsView = () => {
    return (
        <div style={{height:"100%",width:"100%",display:"flex",flexDirection:"column",justifyContent:"space-evenly"}}>
            <Typography status={"negative"}>Hi</Typography>
            <Button color="white" backgroundColor="black" borderColor="#ffffff">Wallet</Button>
            <Badge>status</Badge>
            <TableComponent/>
            <UpDownArrow/>
            <Navbar/>
            <CryptoCard/>
        </div>
    );
};

export default ComponentsView;