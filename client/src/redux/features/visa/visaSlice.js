import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { showStats, getVisas, createVisa, editVisa, deleteVisa, getProducts } from './visaService'

const initialState = {
    showAlert: false,
    isEditing: false,
    editVisaId: '',
    caseManager: '',
    country: '',
    visaLocation: '',
    visaTypeOptions: ['student-visa', 'dependent-visa', 'visitor-visa', 'work-visa'],
    countryOptions: ['UK', 'USA', 'Canada', 'Australia', 'UAE', 'Ireland'],
    companyOptions: ['IDP', 'LeapScholar', 'Yocket', 'GeeBee', 'Edvoy', 'Studyportals'],
    visaType: 'student-visa',
    statusOptions: ['interview', 'approved', 'pending'],
    status: 'pending',
    visas: [],
    totalVisas: 0,
    numOfPages: 1,
    page: 1,
    stats: {},
    monthlyApplications: [],
    search: '',
    searchStatus: 'all',
    searchType: 'all',
    searchCountry: '',
    searchCompany: 'all',
    sort: 'latest',
    sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
}

const visaSlice = createSlice({
    name: 'visa',
    initialState,
    reducers: {
        setEditVisa: (state, action) => {
            const visa = state.visas.find((visa) => visa._id === action.payload)
            const { _id, caseManager, country, visaLocation, visaType, status } = visa
            state.isEditing = true
            state.editVisaId = _id
            state.caseManager = caseManager
            state.country = country
            state.visaLocation = visaLocation
            state.visaType = visaType
            state.status = status
        },
        handleChange: (state, action) => {
            state.page = 1
            state[action.payload.name] = action.payload.value
        },
        changePage: (state, action) => {
            state.page = action.payload
        },
        clearValues: (state, action) => {
            state.isEditing = false
            state.editVisaId = ''
            state.caseManager = ''
            state.country = ''
            state.visaLocation = ''
            state.visaType = 'full-time'
            state.status = 'pending'
        },
        clearFilters: (state, action) => {
            state.searchCountry = ''
            state.searchStatus = 'all'
            state.searchType = 'all'
            state.searchCompany = 'all'
            state.sort = 'latest'
        },
    },
    extraReducers: builder => {
        builder.addCase(showStats.fulfilled, (state, action) => {
            state.isLoading = false
            state.stats = action.payload.defaultStats
            state.monthlyApplications = action.payload.monthlyApplications
        })
        builder.addCase(getVisas.fulfilled, (state, action) => {
            state.isLoading = false
            state.visas = action.payload.visas
            state.totalVisas = action.payload.totalVisas
            state.numOfPages = action.payload.numOfPages
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.visas = action.payload.visas
            state.totalVisas = action.payload.totalVisas
            state.numOfPages = action.payload.numOfPages
        })
        builder.addMatcher(isAnyOf(showStats.pending, getVisas.pending, getProducts.pending, createVisa.pending, editVisa.pending, deleteVisa.pending), state => {
            state.isLoading = true
            state.showAlert = false
        })
        builder.addMatcher(isAnyOf(createVisa.fulfilled, editVisa.fulfilled), (state, action) => {
            state.isLoading = false
            state.showAlert = true
            state.alertType = 'success'
            state.alertText = 'New Visa Created/Updated!'
        })
        builder.addMatcher(isAnyOf(showStats.rejected, getVisas.rejected, getProducts.rejected, createVisa.rejected, editVisa.rejected, deleteVisa.rejected), (state, action) => {
            state.isLoading = false
            state.showAlert = true
            state.alertType = 'danger'
            state.alertText = action.error.message
        })
    }
})

export default visaSlice.reducer
export const { setEditVisa, handleChange, changePage, clearValues, clearFilters } = visaSlice.actions