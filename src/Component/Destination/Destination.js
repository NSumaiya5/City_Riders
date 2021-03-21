import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import GoogleMap from '../GoogleMap/GoogleMap';



const Destination = () => {
    const {id } = useParams();

  
    // const vehicleInfo = fakeData.find(vehicle =>vehicle.key=== vehicleName)
    // const [vehicleInfo, setVehicleInfo] = useState([]);

    // useEffect(() => {
    //     setVehicleInfo(fakeData.find(vehicle =>vehicle.key=== vehicleName))
    // }, [])

    const history = useHistory();
    const handleReserved = (id) =>{
        history.push(`/reserved/${id}`);
    }
    const [destination, setDestination] = useState({
        from: '',
        to: ''
    })

    const handleBlur = (e) => {
        const newDestinationInfo = { ...destination }
        newDestinationInfo[e.target.name] = e.target.value;
        setDestination(newDestinationInfo);
    }
    return (
        <div className="container ">
            <div className="row m-3">
                <div className="col-md-5 ">
                    <div className="card bg-info shadow text-white" style={{width:'20rem',height:'25rem'}}>
                        <form className="p-3">
                        <label className="p-3">Pick from</label>
                       <input  onBlur={handleBlur} type="text" class="form-control" id="from" required></input>
                        <label className="p-3">Pick To</label>
                       <input onBlur={handleBlur} type="text" class="form-control" id="to"required></input>
                       
                        <button className="btn btn-danger mt-3 w-100" onClick ={() =>handleReserved(id)}>Search</button>
                        </form>
                    </div>
                </div>
                <div className="col-md-6">
                <GoogleMap></GoogleMap>
                    {/* <img src={map} alt="" className="w-100 mt-3"/> */}
                </div>
            </div>
           
        </div>
    );
};

export default Destination;