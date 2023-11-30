import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const getPartners = createAsyncThunk('partner/getPartners', (arg, { rejectWithValue }) => {
    return axios
        .get('/api/v1/partners')
        .then(response => response.data)
        .catch(error => {return rejectWithValue(error.response.data.msg)})
})

export const getPartnerDetails = createAsyncThunk('partner/getPartnerDetails', ( partnerId, { rejectWithValue }) => {
    return axios
        .get(`/api/v1/partners/${partnerId}`)
        .then(response => response.data)
        .catch(error => {return rejectWithValue(error.response.data.msg)})
})

export const createPartner = createAsyncThunk('partner/createPartner', (currentPartner, { rejectWithValue }) => {
    return axios
        .post('/api/v1/partners',
            currentPartner)
        .then(response => response.data)
        .catch(error => {return rejectWithValue(error.response.data.msg)})
})

export const createAdminUser = createAsyncThunk('partner/createAdminUser', (currentUser, { rejectWithValue }) => {
    return axios
        .post('/api/v1/users',
            currentUser)
        .then(response => response.data)
        .catch(error => {return rejectWithValue(error.response.data.msg)})
})

export const editAdminUser = createAsyncThunk('user/editUser', (currentUser, { rejectWithValue }) => {
    const { _id } = currentUser
    return axios
        .patch(`/api/v1/users/${_id}`,
            currentUser)
        .then(response => response.data)
        .catch(error => {return rejectWithValue(error.response.data.msg)})
})

export const editPartner = createAsyncThunk('partner/editPartner', (currentPartner, { rejectWithValue }) => {
    const { _id } = currentPartner
    return axios
        .patch(`/api/v1/partners/${_id}`,
            currentPartner)
        .then(response => response.data)
        .catch(error => {return rejectWithValue(error.response.data.msg)})
})

export const deletePartner = createAsyncThunk('partner/deletePartner', (partnerId, { rejectWithValue }) => {
    return axios
        .delete(`/api/v1/partners/${partnerId}`)
        .then(response => response.data)
        .catch(error => {return rejectWithValue(error.response.data.msg)})
})

const initialState = {
    isLoading: false,
    partners: [],
    partnerDetails: null,
    adminDetails: null,
    totalPartners: 0,
    numOfPages: 1,
    page: 1,
    error: null
}

const partnerSlice = createSlice({
    name: 'partner',
    initialState,
    reducers: {
        changePage: (state, action) => {
            state.page = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(getPartners.fulfilled, (state, action) => {
            state.isLoading = false
            state.partners = action.payload.partners
            state.totalPartners = action.payload.totalPartners
            state.numOfPages = action.payload.numOfPages
        })
        builder.addCase(getPartnerDetails.fulfilled, (state, action) => {
            state.isLoading = false
            state.partnerDetails = action.payload
        })
        builder.addCase(createPartner.fulfilled, (state, action) => {
            state.isLoading = false
            state.partnerDetails = action.payload
        })
        builder.addCase(createAdminUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.adminDetails = action.payload
        })
        builder.addCase(editAdminUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.adminDetails = action.payload
        })
        builder.addCase(editPartner.fulfilled, (state, action) => {
            state.isLoading = false
            state.partnerDetails = action.payload
        })
        builder.addCase(deletePartner.fulfilled, (state, action) => {
            state.isLoading = false
            state.partnerDetails = action.payload
        })
        builder.addMatcher(isAnyOf(getPartners.pending, getPartnerDetails.pending, createPartner.pending, createAdminUser.pending, editAdminUser.pending, editPartner.pending, deletePartner.pending), state => {
            state.isLoading = true
        })
        builder.addMatcher(isAnyOf(getPartners.rejected, getPartnerDetails.rejected, createPartner.rejected, createAdminUser.rejected, editAdminUser.rejected, editPartner.rejected, deletePartner.rejected), (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
})

export default partnerSlice.reducer
export const { changePage } = partnerSlice.actions