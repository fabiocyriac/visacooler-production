import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const showStats = createAsyncThunk('visa/showStats', () => {
    return axios
        .get('/api/v1/visas/stats')
        .then(response => response.data)
})

export const getVisas = createAsyncThunk('visa/getVisas', (arg, { getState }) => {
    const state = getState();
    let url = `/api/v1/visas?page=${state.visa.page}&status=${state.visa.searchStatus}&visaType=${state.visa.searchType}&sort=${state.visa.sort}`;
    if (state.visa.search) {
        url = url + `&search=${state.visa.search}`;
    }
    return axios
        .get(url)
        .then(response => response.data)
})

export const getProducts = createAsyncThunk('visa/getProducts', (arg, { getState }) => {
    const state = getState();
    let url = `/api/v1/products?page=${state.visa.page}&status=${state.visa.searchStatus}&visaType=${state.visa.searchType}&sort=${state.visa.sort}`;
    if (state.visa.search) {
        url = url + `&search=${state.visa.search}`;
    }
    return axios
        .get(url)
        .then(response => response.data)
})

export const createVisa = createAsyncThunk('visa/createVisa', (arg, { getState }) => {
    const state = getState();
    const { caseManager, country, visaLocation, visaType, status } = state.visa;
    return axios
        .post('/api/v1/visas', {
            caseManager,
            country,
            visaLocation,
            visaType,
            status,
        })
        .then(response => response.data)
})

export const editVisa = createAsyncThunk('visa/editVisa', (arg, { getState }) => {
    const state = getState();
    const { caseManager, country, visaLocation, visaType, status } = state.visa;
    return axios
        .patch(`/api/v1/visas/${state.visa.editVisaId}`, {
            caseManager,
            country,
            visaLocation,
            visaType,
            status,
        })
        .then(response => response.data)

})

export const deleteVisa = createAsyncThunk('visa/deleteVisa', ({ visaId }, { dispatch }) => {
    return axios
        .delete(`/api/v1/visas/${visaId}`)
        .then(() => {
            dispatch(getVisas());
        })
})

