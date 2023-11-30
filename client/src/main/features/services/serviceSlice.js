import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const showStats = createAsyncThunk('visa/showStats', () => {
    return axios
        .get('/api/v1/services/stats')
        .then(response => response.data)
})

export const getServices = createAsyncThunk('visa/getServices', (currentVisa) => {
    let url = `/api/v1/services?page=${currentVisa.page}&country=${currentVisa.searchCountry}&visaType=${currentVisa.searchType}&sort=${currentVisa.sort}`;
    return axios
        .get(url)
        .then(response => response.data)
})

export const getServiceDetails = createAsyncThunk('user/getServiceDetails', (visaId) => {
    return axios
        .get(`/api/v1/services/${visaId}`)
        .then(response => response.data)
})


export const createService = createAsyncThunk('visa/createService', (currentVisa, { dispatch }) => {
    return axios
        .post('/api/v1/services', currentVisa)
        .then(response => response.data)
})

export const editService = createAsyncThunk('visa/editService', (currentVisa, { dispatch }) => {
    const { _id } = currentVisa
    return axios
        .patch(`/api/v1/services/${_id}`,
            currentVisa)
        .then(response => response.data)
})

export const deleteService = createAsyncThunk('visa/deleteService', (visaId, { dispatch }) => {
    return axios
        .delete(`/api/v1/services/${visaId}`)
        .then(response => response.data)
})



const initialState = {
    isLoading: false,
    services: [],
    serviceDetails: null,
    totalVisas: 0,
    numOfPages: 1,
    page: 1,
    error: ''
}

const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        changePage: (state, action) => {
            state.page = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(getServices.fulfilled, (state, action) => {
            state.isLoading = false
            state.services = action.payload.visas
            state.totalVisas = action.payload.totalVisas
            state.numOfPages = action.payload.numOfPages
        })
        builder.addCase(getServiceDetails.fulfilled, (state, action) => {
            state.isLoading = false
            state.serviceDetails = action.payload
        })
        builder.addCase(createService.fulfilled, (state, action) => {
            state.isLoading = false
            state.serviceDetails = action.payload
        })
        builder.addCase(editService.fulfilled, (state, action) => {
            state.isLoading = false
            state.serviceDetails = action.payload
        })
        builder.addCase(deleteService.fulfilled, (state, action) => {
            state.isLoading = false
            state.serviceDetails = action.payload
        })
        builder.addMatcher(isAnyOf(showStats.pending, getServices.pending, getServiceDetails.pending, createService.pending, editService.pending, deleteService.pending), state => {
            state.isLoading = true
        })
        builder.addMatcher(isAnyOf(showStats.rejected, getServices.rejected, getServiceDetails.rejected, createService.rejected, editService.rejected, deleteService.rejected), (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
})

export default serviceSlice.reducer
export const { changePage } = serviceSlice.actions