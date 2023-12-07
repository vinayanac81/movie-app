import {createSlice}from "@reduxjs/toolkit"

export const mainSlice=createSlice({
    name:"home",
    initialState:{
        url:{},
        genres:{},
    },
    reducers:{
        getApiConfiguration:(state,action)=>{
            state.url=action.payload
        }, getGenres:(state,action)=>{
            state.genres=action.payload
        },
    },
  
})

export const {getApiConfiguration,getGenres}=mainSlice.actions

export default mainSlice.reducer