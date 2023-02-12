import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const POST_NEW_CASE = 'http://localhost:8080/api/case/create/';
const GET_ALL_CASE = 'http://localhost:8080/api/case/all';
const DELETE_CASE = 'http://localhost:8080/api/case/id/';




export const fetchCases = createAsyncThunk('case/fetchCases', async () => {
    const response = await axios.get(GET_ALL_CASE)
    return response.data;
});

export const addNewCase = createAsyncThunk('case/addNewCase', async (data) => {

    const response = await axios.post(`${POST_NEW_CASE}${data.contractId}`, data.lawCase)
    return response.data
});

export const updateCase = createAsyncThunk('cases/addUpdateCase', async (data) => {
    const response=await axios.post(POST_NEW_CASE, data.case)
    
    return response.data
})

export const deleteCase = createAsyncThunk('projects/deleteCases', async (data) => {
    await axios.delete(`${DELETE_CASE}${data.caseId}`)
    const response = await axios.get(GET_ALL_CASE)
    return response.data
});

const initialState = {
    caseLaws: [],
    status: 'idle',
    error: null
}




export const caseLawSlice = createSlice({
    name: 'caseLaws',
    initialState,
    reducers: {
        addCase: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(id, caseTitle, attenCourtRoom,startDate,startTime,endDate,endTime,description) {
                return {
                    payload: {
                        id,
                        caseTitle,
                        attenCourtRoom,
                        startDate,
                        startTime,
                        endDate,
                        endTime,
                        description 

                    }
                };

            },

        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchCases.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchCases.fulfilled, (state, action) => {
                state.status = 'succeeded';
                //state.cases = state.cases.concat(action.payload);
                state.caseLaws = action.payload
            })
            .addCase(fetchCases.rejected, (state, action) => {
                state.status = 'failed';

                state.error = action.error.message;
            })
            .addCase(addNewCase.fulfilled, (state, action) => {
                state.caseLaws.push(action.payload)
            })
            .addCase(updateCase.fulfilled, (state, action) => {

                const caseLaw = action.payload
                const caseLaws = state.caseLaws.filter(con=>con.id !== caseLaw.id)
                //const inquerys = state.inquerys.filter(inq => inq.id !== inquery.id)

                state.caseLaws = [caseLaw, ...caseLaws]            


            })
            .addCase(deleteCase.fulfilled, (state, action) => {
                //const caseId = Number(action.payload)
                //const cases = state.cases.filter(con=>con.id !== caseId)
                //state.cases = cases
                state.status = 'succeeded';
                //state.cases = state.cases.concat(action.payload);
                state.caseLaws = action.payload
            })

    }

});


export const selectAllCase = (state) => state.caseLaws.caseLaws;
export const getCaseStatus = (state) => state.caseLaws.caseLaws;
export const getCaseError = (state) => state.caseLaws.error;
export const selectCaseById = (state, caseId) => state.caseLaws.caseLaws.find(caseLaw => caseLaw.id === caseId)
export const { addCase } = caseLawSlice.actions;
export default caseLawSlice.reducer;