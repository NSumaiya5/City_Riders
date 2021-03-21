import { Link, useParams } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData.json';
import GoogleMap from '../GoogleMap/GoogleMap';




const Reserved = () => {

    const { id } = useParams();
    // const{ vehicleName} = props.vehicle;
    const [vehicleInfo, setVehicleInfo] = useState([]);
    

    useEffect(() => {
        setVehicleInfo(fakeData[id-1]) 
        
    }, [id])
    const { vehicleImage,vehicleSeat,ticketPrice,vehicleName} = vehicleInfo;
    const [destination, setDestination] = useState({
        from: '',
        to: ''
    })

    return (
        <div className="container">
        <div className="row m-3">
            <div className="col-md-6">
                <div className="card bg-white shadow text-dark" style={{width:'25rem',height:'25rem'}}>
                    <form className="p-3">
            <div className="mt-4">
                    <h5>From: <strong>{destination.from}</strong> </h5>
                    <h5>To: <strong>{destination.to}</strong> </h5>
                </div>
            <div className="border rounded border border-dark mt-4 mb-4">
                <img style={{ width: '80px' }} src={vehicleImage} alt="" />
                <strong style={{marginLeft:'10px'}}>{vehicleName}</strong>
                <img  style={{ width: '35px',marginLeft:'30px'}} src="https://static.thenounproject.com/png/292059-200.png" alt=""/>
                 <strong > {vehicleSeat}</strong> 
                 <strong style={{marginLeft:'110px'}}> ${ ticketPrice}</strong>
            </div>
            <div className="border rounded border border-dark mt-4 mb-4">
                <img style={{ width: '80px' }} src={vehicleImage} alt="" />
                <strong style={{marginLeft:'10px'}}>{vehicleName}</strong>
                <img  style={{ width: '35px',marginLeft:'30px'}} src="https://static.thenounproject.com/png/292059-200.png" alt=""/>
                 <strong > {vehicleSeat}</strong> 
                 <strong style={{marginLeft:'110px'}}> ${ ticketPrice}</strong>
            </div>
            <div className="border rounded border border-dark mt-4 mb-4">
                <img style={{ width: '80px' }} src={vehicleImage} alt="" />
                <strong style={{marginLeft:'10px'}}>{vehicleName}</strong>
                <img  style={{ width: '35px',marginLeft:'30px'}} src="https://static.thenounproject.com/png/292059-200.png" alt=""/>
                 <strong > {vehicleSeat}</strong> 
                 <strong style={{marginLeft:'110px'}}> ${ ticketPrice}</strong>
            </div>
            </form>
            </div>
        </div>
                <div className="col-md-6 mt-3">
                    <GoogleMap></GoogleMap>
                </div>
                </div>
                </div>
            
       
    );
};


export default Reserved;