import React, { useEffect } from 'react'
import "./display.css"
import { useDispatch, useSelector } from "react-redux";
import { getAllRooms } from '../../actions/reservationAction';

const Display = () => {
    const dispatch = useDispatch();
    const { rooms } = useSelector((state) => state.rooms);
    console.log(rooms);

    useEffect(() => {

        dispatch(getAllRooms());

    }, [dispatch])


    return (

        <div className='display'>
            {rooms &&
                rooms.map((item) => {
                    return (

                        <>
                            <div className='room'>
                                {/* <h4>Normal Room</h4> */}
                                <p>Normal Room: {item.NormalRoom}</p>
                                {/* <p>{room.NormalRoom}</p> */}
                                <p>Oxygen Room: {item.OxygenRoom}</p>
                                <p>ICU: {item.ICU}</p>
                            </div>
                            <div className='room'>
                                <p>Flat Beds: {item.FlatBeds}</p>
                                <p>Recliner Beds: {item.ReclinerBeds}</p>
                                {/* <p></p> */}
                                {/* <h4>OxygenRoom</h4> */}
                            </div>
                            <div className='room'>
                                <p>Ventilator: {item.Ventilator}</p>
                                {/* <h4>ICU</h4> */}
                                <p>Oxygen Cylinder: {item.OxygenCylinder}</p>
                                <p>Normal Masks: {item.NormalMasks}</p>
                                <p>Non rebreather masks: {item.Nonrebreathermasks} </p>
                            </div>
                        </>
                    )

                })

            }
        </div>
    )
}

export default Display