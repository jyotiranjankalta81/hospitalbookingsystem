import { configureStore } from '@reduxjs/toolkit'
import { allRoomReducer, reservationReducer } from './Reducers/reservationReducer';

// const initialState = {}
// initialState,
const store = configureStore({
    reducer: {
        reservation: reservationReducer,
        rooms: allRoomReducer,
    },
})

export default store;