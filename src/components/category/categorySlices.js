import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


import axios from "axios";


const GET_ALL_CATEGORIES= 'http://localhost:8383/api/category/all';
const POST_NEW_CATEGORIES= 'http://localhost:8383/api/category/create';
//const UPDATE_CATEGORY = 'http://localhost:8383/api/category/update/'
const DELETE_CATEGORY = 'http://localhost:8383/api/category/id/';

export const fetchCategories = createAsyncThunk('categories/fetchCategories',async () =>{
    const response = await axios.get(GET_ALL_CATEGORIES);
    return response.data;
 });

 export const addNewCategory = createAsyncThunk('categories/addNewCategory',async (initialCategory) => {
    const response = await axios.post(POST_NEW_CATEGORIES,initialCategory);
    return response.data
 })

 export const updateCategory = createAsyncThunk('categories/updateCategory',async (initialCategory) => {
    const response = await axios.post(POST_NEW_CATEGORIES,initialCategory);
    return response.data
 })

// export const updateCategory = createAsyncThunk('categories/updateCategory',async (categoryId) => {
//     const response = await axios.post(`${UPDATE_CATEGORY}${categoryId}`);
//     return response.data
//  })

 export const deleteCategory = createAsyncThunk('categories/deleteCategory',async (categoryId) => {
    const response = await axios.delete(`${DELETE_CATEGORY}${categoryId}`);
    return response.data
 })


const initialState = {
    categories : [],
    status :'idle',
    error : null

}
export const categorySlices = createSlice({
    name:'categories',
    initialState,
    reducers:{
        addCategory:{
            reducer(state,action){
                state.push(action.payload)

    },
    prepare(categoryName,description){
        return{
         payload:{
            categoryName,
            description

        }
    };

    },
}
},
extraReducers(builder){
    builder
        .addCase(fetchCategories.pending,(state,action)=>{
            state.status = 'loading';
        })
        .addCase(fetchCategories.fulfilled,(state,action)=>{
            state.status = 'succeeded';

            //state.categories = state.categories.concat(action.payload);
            state.categories = action.payload
        })
        .addCase(fetchCategories.rejected,(state,action)=>{
            state.status = 'failed';

            state.error = action.error.message;
        })
        .addCase(addNewCategory.fulfilled,(state,action)=>{
            
            state.categories.push(action.payload)
        })
       
        .addCase(updateCategory.fulfilled,(state,action)=>{
            const category = action.payload
            const categories = state.categories.filter(c => c.id !== category.id )
            state.categories= [...categories,category]
    })
    .addCase(deleteCategory.fulfilled,(state,action)=>{
        const categories = state.categories.filter(c => c.id !== Number(action.payload))

        state.categories = categories

    })


}
});

export const selectAllCategories = (state) => state.categories.categories;
export const getCategoryStatus = (state) => state.categories.status
export const getCategoryError = (state) => state.categories.error

//for update
export const selectCategoryById = (state,categoryId) => state.categories.categories.find(category => category.id === categoryId)


export const { addCategory } = categorySlices.actions;
export default categorySlices.reducer;
