import React, { useState, useEffect } from 'react';
import "./booking.css";
import { useDispatch } from 'react-redux';
import { reservationUser } from '../../actions/reservationAction';
import { useNavigate } from "react-router-dom"

const Booking = () => {


    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [room, setRoom] = useState("");
    const [quantity, setQuantity] = useState("");
    // const navigate = useNavigate();

    // dispatch
    const dispatch = useDispatch();
    const bookingSubmit = (e) => {
        // e.preventDefault();
        dispatch(reservationUser(name, date, room, quantity))
        alert("your order booked succefully");
    }

    // useEffect(() => {
    //     navigate("/");
    // }, [navigate])



    return (
        <div className='bookingslot'>
            <h2 className='booking_header'>Book Your Emergeny Room</h2>
            <div>
                <form className='bookingForm' onSubmit={bookingSubmit}>
                    <div className='bookingName'>
                        <label htmlFor='exampleInputEmail1'>Name</label>
                        <input
                            type="text"
                            placeholder=" Enter Your Name"
                            required
                            name='name'
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className='bookingDate'>
                        <label htmlFor='exampleInputEmail1'>Date</label>
                        <input
                            type="Date"
                            placeholder="Select Date"
                            required
                            name='date'
                            value={date}
                            onChange={e => setDate(e.target.value)}
                        />
                    </div>
                    <div className='bookingRoom'>
                        <label htmlFor="cars">Choose the Room:</label>
                        <select id="cars" required name="room" onChange={e => setRoom(e.target.value)}>
                            <option value="NormalRoom">Normal Room</option>
                            <option value="OxygenRoom">Oxygen Room</option>
                            <option value="ICU">ICU</option>
                            {/* <option value="audi">Audi</option> */}
                        </select>

                    </div>
                    <div className='bookingRoomQuantity'>
                        <label for="quantity">Choose Number of Rooms:</label>
                        <input
                            type="text"
                            inputMode="numeric"
                            placeholder="Select Room Quantity"
                            required
                            name='quantity'
                            value={quantity}
                            onChange={e => setQuantity(e.target.value)}
                        />
                    </div>
                    {/* <br /> */}
                    <input type="submit" value="Book" className="bookingBtn" />

                </form>
            </div>
        </div>

    )
}

export default Booking