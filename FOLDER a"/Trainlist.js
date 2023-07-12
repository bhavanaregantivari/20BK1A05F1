//Develop an API to display all trains in the next 12 hours with their seat availability and pricing

import React ,{useEffect, useState } from 'react';
const TrainList =()=>{
    const [trains,setTrains] = useState([]);
     
    useEffect(() => {
        fetechTrains();
    }, []);
    const fetechTrains = async () => {
        try{
            const response = await fetechTrains('/api/trains');
            const data = await response.json();

            setTrains(data);
        } catch (error) {
            console.error('Error fetching trains:',error);
        }
    };
    return (
        <div>
            <h1>Train Availability</h1>
            {trains.length>0?(
            <table>
                <thread>
                    <tr>
                        <th>Train Number</th>
                        <th>Departure Time</th>
                        <th>Arraival Time </th>
                        <th>Seat Availabilty</th>
                        <th>Price</th>
                    </tr>
                </thread>
                <tbody>
                    { trains.map(train =>(
                        <tr key={train.train_number}>
                            <td>{train.train_number}</td>
                            <td>{train.depature_time}</td>
                            <td>{train.arraival_time}</td>
                            <td>{train.seat_availability}</td>
                            <td>{train.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            ) : (
                <p>Loading........</p>
            )}
        </div>
    );
};

export default TrainList;
