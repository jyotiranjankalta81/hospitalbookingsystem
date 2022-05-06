import React, { useState } from 'react';
import "./booking.css";
import { useDispatch } from 'react-redux';
import { reservationUser } from '../../actions/reservationAction';
// import { reservationUser } from '../../actions/reservationAction';

const Booking = () => {

    const [name, setName] = useState('');
    const [date, setDate] = useState('');

    // const newReservation = useSelector(state => state.newReservation);

    // const { order, loading, error } = newReservation;

    // dispatch
    const dispatch = useDispatch();
    const bookingSubmit = (e) => {
        // createReservation
        e.preventDefault();
        // dispatch(reservationUser(name, date));
        dispatch(reservationUser(name, date))
        // console.log(order, loading, error);
        console.log("name " + name);
        console.log("date" + date);
    }

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
                    {/* <br /> */}
                    <input type="submit" value="Book" className="bookingBtn" />

                </form>
            </div>
        </div>

    )
}

export default Booking