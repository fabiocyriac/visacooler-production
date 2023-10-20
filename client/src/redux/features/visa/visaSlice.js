import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { showStats, createVisa, editVisa, deleteVisa, getVisas, getVisaDetails } from './visaService'

const initialState = {
    loading: false,
    visas: [],
    visaDetails: null,
    stats: {},
    monthlyApplications: [],
    totalVisas: 0,
    numOfPages: 1,
    page: 1,
    success: false,
    failure: false,
    successCreate: false,
    failureCreate: false,
    successEdit: false,
    failureEdit: false,
    successDelete: false,
    failureDelete: false,
    error: '',
}

const visaSlice = createSlice({
    name: 'visa',
    initialState,
    reducers: {
        resetState: (state) => {
            state.loading = false
            state.success = false
            state.failure = false
            state.successCreate = false
            state.failureCreate = false
            state.successEdit = false
            state.failureEdit = false
            state.successDelete = false
            state.failureDelete = false
        },
        changePage: (state, action) => {
            state.page = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(showStats.fulfilled, (state, action) => {
            state.loading = false
            state.success = true
            state.stats = action.payload.defaultStats
            state.monthlyApplications = action.payload.monthlyApplications
        })
        builder.addCase(getVisas.fulfilled, (state, action) => {
            state.loading = false
            state.success = true
            state.visas = action.payload.visas
            state.totalVisas = action.payload.totalVisas
            state.numOfPages = action.payload.numOfPages
        })
        builder.addCase(getVisaDetails.fulfilled, (state, action) => {
            state.loading = false
            state.success = true
            state.visaDetails = action.payload
        })
        builder.addCase(createVisa.fulfilled, (state, action) => {
            state.loading = false
            state.successCreate = true
            state.visaDetails = action.payload
        })
        builder.addCase(createVisa.rejected, (state, action) => {
            state.loading = false
            state.failureCreate = true
            state.error = action.error.message
        })
        builder.addCase(editVisa.fulfilled, (state, action) => {
            state.loading = false
            state.successEdit = true
            state.visaDetails = action.payload
        })
        builder.addCase(editVisa.rejected, (state, action) => {
            state.loading = false
            state.failureEdit = true
            state.error = action.error.message
        })
        builder.addCase(deleteVisa.fulfilled, (state, action) => {
            state.loading = false
            state.successDelete = true
            state.visaDetails = action.payload
        })
        builder.addCase(deleteVisa.rejected, (state, action) => {
            state.loading = false
            state.failureDelete = true
            state.error = action.error.message
        })
        builder.addMatcher(isAnyOf(createVisa.fulfilled, editVisa.fulfilled), (state, action) => {
            state.loading = false
            state.successEdit = true
            state.visaDetails = action.payload
        })
        builder.addMatcher(isAnyOf(showStats.pending, getVisas.pending, getVisaDetails.pending, createVisa.pending, editVisa.pending, deleteVisa.pending), state => {
            state.loading = true
            state.successCreate = false
            state.failureCreate = false
            state.successEdit = false
            state.failureEdit = false
            state.successDelete = false
            state.failureDelete = false
        })
        builder.addMatcher(isAnyOf(showStats.rejected, getVisas.rejected, getVisaDetails.rejected), (state, action) => {
            state.loading = false
            state.failure = true
            state.error = action.error.message
        })
    }
})

export default visaSlice.reducer
export const { changePage, resetState } = visaSlice.actions