import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const showStats = createAsyncThunk('visa/showStats', () => {
    return axios
        .get('/api/v1/visas/stats')
        .then(response => response.data)
})

export const getVisaDetails = createAsyncThunk('user/getVisaDetails', (visaId) => {
    return axios
        .get(`/api/v1/visas/${visaId}`)
        .then(response => response.data)
})

export const getVisas = createAsyncThunk('visa/getVisas', (currentVisa) => {
    console.log("fck"+currentVisa.partner)
    let url = `/api/v1/products?page=${currentVisa.page}&country=${currentVisa.searchCountry}&partner=${currentVisa.partner}&visaType=${currentVisa.searchType}&company=${currentVisa.searchCompany}&sort=${currentVisa.sort}`;
    return axios
        .get(url)
        .then(response => response.data)
})

export const createVisa = createAsyncThunk('visa/createVisa', (currentVisa) => {
    return axios
        .post('/api/v1/visas', currentVisa)
        .then(response => response.data)
})

export const editVisa = createAsyncThunk('visa/editVisa', (currentVisa, { getState }) => {
    const { _id } = currentVisa
    return axios
        .patch(`/api/v1/visas/${_id}`,
            currentVisa)
        .then(response => response.data)

})

export const deleteVisa = createAsyncThunk('visa/deleteVisa', ( visaId, { dispatch }) => {
    return axios
        .delete(`/api/v1/visas/${visaId}`)
        .then(response => response.data)
})

