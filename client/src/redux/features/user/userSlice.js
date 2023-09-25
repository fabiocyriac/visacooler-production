import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { createUser, updateUser, getUser, loginUser, logoutUser } from './userService'

const initialState = {
    user: null,
    userLoading: false,
    isLoading: false,
    alertText: '',
    alertType: '',
    userLocation: '',
    error: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addMatcher(isAnyOf(getUser.pending, createUser.pending, updateUser.pending, loginUser.pending, logoutUser.pending), state => {
            state.userLoading = true
            state.isLoading = true
        })
        builder.addMatcher(isAnyOf(getUser.fulfilled, createUser.fulfilled, updateUser.fulfilled, loginUser.fulfilled, logoutUser.fulfilled), (state, action) => {
            state.userLoading = false
            state.isLoading = false
            state.user = action.payload
            state.alertType = 'Successful! Redirecting...'
            state.alertText = 'chakka'
        })
        builder.addMatcher(isAnyOf(getUser.rejected, createUser.rejected, updateUser.rejected, loginUser.rejected, logoutUser.rejected), (state, action) => {
            state.userLoading = false
            state.isLoading = false
            state.user = null
            state.alertType = 'danger'
            state.alertText = 'An Error Occured While Processing Request...'
            state.error = action.error.message
        })
    }
})

export default userSlice.reducer