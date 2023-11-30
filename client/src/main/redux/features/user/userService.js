import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const getUserDetails = createAsyncThunk('user/getUserDetails', (userId) => {
    return axios
        .get(`/api/v1/users/${userId}`)
        .then(response => response.data)
})


export const getUsers = createAsyncThunk('user/getUsers', () => {
    return axios
        .get('/api/v1/users')
        .then(response => response.data)
})

export const deleteUser = createAsyncThunk('user/deleteUser', (userId, { dispatch }) => {
    return axios
        .delete(`/api/v1/users/${userId}`)
        .then(response => response.data)
})

export const editUser = createAsyncThunk('user/editUser', (currentUser, { dispatch, getState }) => {
    const { _id } = currentUser
    return axios
        .patch(`/api/v1/users/${_id}`,
            currentUser)
        .then(response => response.data)
})