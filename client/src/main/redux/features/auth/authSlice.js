import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { createUser, loginUser, logoutUser, updateUser, getCurrentUser } from './authService'

const initialState = {
    user: null,
    loading: false,
    success: false,
    failure: false,
    error: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetState: (state) => {
            state.loading = false
            state.success = false
            state.failure = false
        }
    },
    extraReducers: builder => {
        builder.addMatcher(isAnyOf(getCurrentUser.pending, createUser.pending, updateUser.pending, loginUser.pending, logoutUser.pending), state => {
            state.loading = true
            state.success = false
            state.failure = false
        })
        builder.addMatcher(isAnyOf(getCurrentUser.fulfilled, createUser.fulfilled, updateUser.fulfilled, loginUser.fulfilled, logoutUser.fulfilled), (state, action) => {
            state.loading = false
            state.success = true
            state.user = action.payload
        })
        builder.addMatcher(isAnyOf(getCurrentUser.rejected, createUser.rejected, updateUser.rejected, loginUser.rejected, logoutUser.rejected), (state, action) => {
            state.loading = false
            state.success = false
            state.failure = true
            state.user = null
            state.error = action.error.message
        })
    }
})

export default userSlice.reducer
export const { resetState } = userSlice.actions