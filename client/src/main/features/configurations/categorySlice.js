import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const getUsers = createAsyncThunk('user/getUsers', () => {
    return axios
        .get('/api/v1/users')
        .then(response => response.data)
})

export const getUserDetails = createAsyncThunk('user/getUserDetails', (userId) => {
    return axios
        .get(`/api/v1/users/${userId}`)
        .then(response => response.data)
})

export const createUser = createAsyncThunk('user/createUser', (currentUser) => {
    return axios
        .post('/api/v1/users',
            currentUser)
        .then(response => response.data)
})

export const editUser = createAsyncThunk('user/editUser', (currentUser, { dispatch, getState }) => {
    const { _id } = currentUser
    return axios
        .patch(`/api/v1/users/${_id}`,
            currentUser)
        .then(response => response.data)
})

export const deleteUser = createAsyncThunk('user/deleteUser', (userId, { dispatch }) => {
    return axios
        .delete(`/api/v1/users/${userId}`)
        .then(response => response.data)
})

const initialState = {
    isLoading: false,
    users: [],
    userDetails: null,
    totalUsers: 0,
    numOfPages: 1,
    page: 1,
    error: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changePage: (state, action) => {
            state.page = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.isLoading = false
            state.users = action.payload.users
            state.totalUsers = action.payload.totalUsers
            state.numOfPages = action.payload.numOfPages
        })
        builder.addCase(getUserDetails.fulfilled, (state, action) => {
            state.isLoading = false
            state.userDetails = action.payload
        })
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.userDetails = action.payload
        })
        builder.addCase(editUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.userDetails = action.payload
        })
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.userDetails = action.payload
        })
        builder.addMatcher(isAnyOf(getUsers.pending, getUserDetails.pending, createUser.pending, editUser.pending, deleteUser.pending), state => {
            state.isLoading = true
        })
        builder.addMatcher(isAnyOf(getUsers.rejected, getUserDetails.rejected, createUser.rejected, editUser.rejected, deleteUser.rejected), (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
})

export default userSlice.reducer
export const { changePage } = userSlice.actions