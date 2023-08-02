import {createSlice} from "@reduxjs/toolkit";

import axios from "../../utils/axios"

const initialState = {
    isLoggedIn: false,
    token: "",
    isLoading: false
}

const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logIn(state, action) {
            state.isLoggedIn = action.payload.isLoggedIn;
            state.token = action.payload.token;
        },
        signOut(state, action) {
            state.isLoggedIn = false;
            state.token = "";
        }
    }
});

// Reducer
export default slice.reducer;

// Log in
export function logInUser(formValues) {
    // formValues => {email,password}
    return async (dispatch, getState) => {
        await axios.post("/authenticate", {
            ...formValues
        }, {
            headers: {
                "Content-Type": "application/json",
            }
        }).then((response)=>{
            console.warn(response.data.data.token)
            dispatch(slice.actions.logIn({isLoggedIn: true, token: response.data.data.token}))
        }).catch((error)=>{
            console.error(error)
        })
    }
}

export function logOutUser(){
    return async (dispatch, getState) => {
        dispatch(slice.actions.signOut())
    }
}