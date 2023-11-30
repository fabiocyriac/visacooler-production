import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const getCases = createAsyncThunk('case/getCases', () => {
    return axios
        .get('/api/v1/cases')
        .then(response => response.data)
})

export const getCaseDetails = createAsyncThunk('case/getCaseDetails', (caseId) => {
    return axios
        .get(`/api/v1/cases/${caseId}`)
        .then(response => response.data)
})

export const createCase = createAsyncThunk('case/createCase', (currentCase) => {
    return axios
        .post('/api/v1/cases',
            currentCase)
        .then(response => response.data)
})

export const editCase = createAsyncThunk('case/editCase', (currentCase, { dispatch, getState }) => {
    const { _id } = currentCase
    return axios
        .patch(`/api/v1/cases/${_id}`,
            currentCase)
        .then(response => response.data)
})

export const deleteCase = createAsyncThunk('case/deleteCase', (caseId, { dispatch }) => {
    return axios
        .delete(`/api/v1/cases/${caseId}`)
        .then(response => response.data)
})

const initialState = {
    isLoading: false,
    cases: [],
    caseDetails: null,
    totalCases: 0,
    numOfPages: 1,
    page: 1,
    error: ''
}

const caseSlice = createSlice({
    name: 'case',
    initialState,
    reducers: {
        changePage: (state, action) => {
            state.page = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(getCases.fulfilled, (state, action) => {
            state.isLoading = false
            state.cases = action.payload.cases
            state.totalCases = action.payload.totalCases
            state.numOfPages = action.payload.numOfPages
        })
        builder.addCase(getCaseDetails.fulfilled, (state, action) => {
            state.isLoading = false
            state.caseDetails = action.payload
        })
        builder.addCase(createCase.fulfilled, (state, action) => {
            state.isLoading = false
            state.caseDetails = action.payload
        })
        builder.addCase(editCase.fulfilled, (state, action) => {
            state.isLoading = false
            state.caseDetails = action.payload
        })
        builder.addCase(deleteCase.fulfilled, (state, action) => {
            state.isLoading = false
            state.caseDetails = action.payload
        })
        builder.addMatcher(isAnyOf(getCases.pending, getCaseDetails.pending, createCase.pending, editCase.pending, deleteCase.pending), state => {
            state.isLoading = true
        })
        builder.addMatcher(isAnyOf(getCases.rejected, getCaseDetails.rejected, createCase.rejected, editCase.rejected, deleteCase.rejected), (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
})

export default caseSlice.reducer
export const { changePage } = caseSlice.actions