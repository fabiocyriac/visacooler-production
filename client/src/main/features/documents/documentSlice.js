import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const getDocuments = createAsyncThunk('document/getDocuments', () => {
    return axios
        .get('/api/v1/documents')
        .then(response => response.data)
})

export const getDocumentDetails = createAsyncThunk('document/getDocumentDetails', (documentId) => {
    return axios
        .get(`/api/v1/documents/${documentId}`)
        .then(response => response.data)
})

export const createDocument = createAsyncThunk('document/createDocument', (currentDocument) => {
    console.log(currentDocument)
    return axios
        .post('/api/v1/documents',
            currentDocument)
        .then(response => response.data)
})

export const editDocument = createAsyncThunk('document/editDocument', (currentDocument, { dispatch, getState }) => {
    const { _id } = currentDocument
    return axios
        .patch(`/api/v1/documents/${_id}`,
            currentDocument)
        .then(response => response.data)
})

export const deleteDocument = createAsyncThunk('document/deleteDocument', (document, { dispatch }) => {
    const {_id, file_type} = document
    console.log("chakka1"+ _id, file_type)

    return axios
        .delete(`/api/v1/documents/${_id}/${file_type}`)
        .then(response => response.data)
})

const initialState = {
    isLoading: false,
    documents: [],
    documentDetails: null,
    totalDocuments: 0,
    numOfPages: 1,
    page: 1,
    error: ''
}

const documentSlice = createSlice({
    name: 'document',
    initialState,
    reducers: {
        changePage: (state, action) => {
            state.page = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(getDocuments.fulfilled, (state, action) => {
            state.isLoading = false
            state.documents = action.payload.documents
            state.totalDocuments = action.payload.totalDocuments
            state.numOfPages = action.payload.numOfPages
        })
        builder.addCase(getDocumentDetails.fulfilled, (state, action) => {
            state.isLoading = false
            state.documentDetails = action.payload
        })
        builder.addCase(createDocument.fulfilled, (state, action) => {
            state.isLoading = false
            state.documentDetails = action.payload
        })
        builder.addCase(editDocument.fulfilled, (state, action) => {
            state.isLoading = false
            state.documentDetails = action.payload
        })
        builder.addCase(deleteDocument.fulfilled, (state, action) => {
            state.isLoading = false
            state.documentDetails = action.payload
        })
        builder.addMatcher(isAnyOf(getDocuments.pending, getDocumentDetails.pending, createDocument.pending, editDocument.pending, deleteDocument.pending), state => {
            state.isLoading = true
        })
        builder.addMatcher(isAnyOf(getDocuments.rejected, getDocumentDetails.rejected, createDocument.rejected, editDocument.rejected, deleteDocument.rejected), (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
})

export default documentSlice.reducer
export const { changePage } = documentSlice.actions