import { createReducer } from "@reduxjs/toolkit";

const initialState = {}
export const reservationReducer = createReducer(initialState, {

    ReservationRequest: (state) => {
        state.loading = true;
    },
    ReservationSuccess: (state, action) => {
        state.loading = false;
        state.reservation = action.payload;
    },
    ReservationFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.error = null;
    }

});

export const allRoomReducer = createReducer(initialState, {
    allRoomRequest: (state) => {
        state.loading = true;
    },
    allRoomSuccess: (state, action) => {
        state.loading = false;
        state.rooms = action.payload;
    },
    allRoomFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.error = null;
    }
})