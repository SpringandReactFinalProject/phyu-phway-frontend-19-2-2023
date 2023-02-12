import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


import axios from "axios";


const GET_ALL_COURT= 'http://localhost:8383/api/court/all';
const POST_NEW_COURT= 'http://localhost:8383/api/court/create';
//const UPDATE_CATEGORY = 'http://localhost:8383/api/category/update/'
const DELETE_COURT = 'http://localhost:8383/api/court/id/';

export const fetchCourts = createAsyncThunk('courts/fetchCourts',async () =>{
    const response = await axios.get(GET_ALL_COURT);
    return response.data;
 });

 export const addNewCourt = createAsyncThunk('courts/addNewCourt',async (initialCategory) => {
    const response = await axios.post(POST_NEW_COURT,initialCategory);
    return response.data
 })

 export const updateCourt = createAsyncThunk('courts/updateCourt',async (data) => {
    const response = await axios.post(POST_NEW_COURT,data);
    return response.data
 })

// export const updateCategory = createAsyncThunk('categories/updateCategory',async (categoryId) => {
//     const response = await axios.post(`${UPDATE_CATEGORY}${categoryId}`);
//     return response.data
//  })

 export const deleteCourt = createAsyncThunk('courts/deleteCourt',async (courtId) => {
    const response = await axios.delete(`${DELETE_COURT}${courtId}`);
    return response.data
 })


const initialState = {
    courts : [],
    status :'idle',
    error : null

}
export const courtSlices = createSlice({
    name:'courts',
    initialState,
    reducers:{
        addCourt:{
            reducer(state,action){
                state.push(action.payload)

    },
    prepare(courtName,address,township,city){
        return{
         payload:{
            
            courtName,
            address,
            township,
            city

        }
    };

    },
}
},
extraReducers(builder){
    builder
        .addCase(fetchCourts.pending,(state,action)=>{
            state.status = 'loading';
        })
        .addCase(fetchCourts.fulfilled,(state,action)=>{
            state.status = 'succeeded';

            //state.categories = state.categories.concat(action.payload);
            state.courts = action.payload
        })
        .addCase(fetchCourts.rejected,(state,action)=>{
            state.status = 'failed';

            state.error = action.error.message;
        })
        .addCase(addNewCourt.fulfilled,(state,action)=>{
            
            state.courts.push(action.payload)
        })
       
        .addCase(updateCourt.fulfilled,(state,action)=>{
            const court = action.payload
            const courts = state.courts.filter(c => c.id !== court.id )
            state.courts= [...courts,court]
    })
    .addCase(deleteCourt.fulfilled,(state,action)=>{
        const courts = state.courts.filter(c => c.id !== Number(action.payload))

        state.courts = courts

    })


}
});

export const selectAllCourts = (state) => state.courts.courts;
export const getCourtStatus = (state) => state.courts.status
export const getCourtError = (state) => state.courts.error

//for update
export const selectCourtById = (state,courtId) => state.courts.courts.find(court => court.id === courtId)


export const { addCourt } = courtSlices.actions;
export default courtSlices.reducer;
