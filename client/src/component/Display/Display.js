import React, { useEffect } from 'react'
import "./display.css"
import { useDispatch, useSelector } from "react-redux";
import { getAllRooms } from '../../actions/reservationAction';

const Display = () => {
    const dispatch = useDispatch();
    const { rooms } = useSelector((state) => state.rooms);

    useEffect(() => {

        dispatch(getAllRooms());

    }, [dispatch])


    return (

        <div className='display'>
            <div className='room'>
                <h4>Normal Room</h4>
                {/* <p>{rooms.NormalRoom}</p> */}
                {/* <p>{room.NormalRoom}</p> */}
            </div>
            <div className='room'>
                <h4>OxygenRoom</h4>
                {/* <p>{room.OxygenRoom}</p> */}
            </div>
            <div className='room'>
                <h4>ICU</h4>
                {/* <p>{room.ICU}</p> */}
            </div>
        </div>
    )
}

export default Display