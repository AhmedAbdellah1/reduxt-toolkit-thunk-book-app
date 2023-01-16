import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({

    name: 'auth',

    // isLoggedIn: false ===> that mean not login
    initialState: { isLoggedIn: false, name: "Ahmed Abdellah" },

    reducers: {

        logInOut: (state) => {
            state.isLoggedIn = !state.isLoggedIn;
        }
    },
});

export const { logInOut } = authSlice.actions;

export default authSlice.reducer;