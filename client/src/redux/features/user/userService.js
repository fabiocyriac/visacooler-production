import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'


// Generates pending, fulfilled and rejected action types
export const getUser = createAsyncThunk('user/getUser', (arg, { dispatch }) => {
    return axios
        .get('/api/v1/auth/getCurrentUser')
        .then(response => response.data)
        .catch((error) => {
            if (error.response.status === 401) return;
            dispatch(logoutUser());
        })
})

// Generates pending, fulfilled and rejected action types
export const createUser = createAsyncThunk('user/createUser', ({currentUser}) => {
    return axios
        .post('/api/v1/auth/register',
            currentUser)
        .then(response => response.data)
})

// Generates pending, fulfilled and rejected action types
export const updateUser = createAsyncThunk('user/updateUser', ({currentUser}) => {
    return axios
        .patch('/api/v1/auth/updateUser',
            currentUser)
        .then(response => response.data)
})


// Generates pending, fulfilled and rejected action types
export const loginUser = createAsyncThunk('user/loginUser', ({currentUser}) => {
    return axios
        .post('/api/v1/auth/login',
            currentUser)
        .then(response => response.data)
})

// Generates pending, fulfilled and rejected action types
export const logoutUser = createAsyncThunk('user/logoutUser', () => {
    return axios
        .get('/api/v1/auth/logout')
        .then(response => response.data)
})