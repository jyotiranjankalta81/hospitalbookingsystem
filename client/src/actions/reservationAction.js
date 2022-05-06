import axios from "axios"

export const reservationUser = (name, date) => async (dispatch) => {
    try {

        dispatch({
            type: "ReservationRequest",
        });

        const { data } = await axios.post("/api/v1//reservation/new", { name, date }, {
            headers: {
                "Content-Type": "application/json"
            },
        });

        dispatch({
            type: "ReservationSuccess",
            payload: data.reservation,
        });

    } catch (error) {
        dispatch({
            type: "ReservationFailure",
            payload: error.response.data.message,
        });

    }

}


export const getAllRooms = () => async (dispatch) => {
    try {
        dispatch({
            type: "allRoomRequest"
        });

        const { data } = await axios.get(`/api/v1/products`);

        dispatch({
            type: "allRoomSuccess",
            payload: data.products,
        })

    } catch (error) {
        dispatch({
            type: "allRoomFailure",
            payload: error.response.data.message,
        });

    }
};
