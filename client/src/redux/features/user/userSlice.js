import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { getUsers, getUserDetails, editUser, deleteUser } from './userService'

const initialState = {
    userList: null,
    userDetails: null,
    loading: false,
    success: false,
    failure: false,
    successDelete: false,
    failureDelete: false,
    error: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetState: (state) => {
            state.loading = false
            state.success = false
            state.failure = false
            state.successDelete = false
            state.failureDelete = false
            state.successEdit = false
            state.failureEdit = false
        }
    },
    extraReducers: builder => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.loading = false
            state.success = true
            state.userList = action.payload
        })
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.loading = false
            state.successDelete = true
        })
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.loading = false
            state.successDelete = false
            state.failureDelete = true
        })
        builder.addCase(editUser.fulfilled, (state, action) => {
            state.loading = false
            state.successEdit = true
            state.userDetails = action.payload
        })
        builder.addCase(editUser.rejected, (state, action) => {
            state.loading = false
            state.failureEdit = true
            state.error = action.error.message
        })
        builder.addCase(getUserDetails.fulfilled, (state, action) => {
            state.loading = false
            state.success = true
            state.userDetails = action.payload
        })
        builder.addMatcher(isAnyOf(deleteUser.pending, getUsers.pending, getUserDetails.pending, editUser.pending), state => {
            state.loading = true
            state.success = false
            state.failure = false
            state.successDelete = false
            state.failureDelete = false
            state.successEdit = false
            state.failureEdit = false
        })
        builder.addMatcher(isAnyOf(getUsers.rejected, getUserDetails.rejected), (state, action) => {
            state.loading = false
            state.success = false
            state.failure = true
            state.userList = null
            state.userDetails = null
            state.error = action.error.message
        })
    }
})

export default userSlice.reducer
export const { resetState } = userSlice.actions