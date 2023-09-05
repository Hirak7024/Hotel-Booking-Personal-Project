import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

//This is a action. CreateAsyncThunk creates an action
export const getAllData = createAsyncThunk("getRooms", async()=>{
    const response = await axios.get("http://localhost:8000/api/rooms");
    return response; 
})

const getRoom = createSlice({
    name:"getRoom",
    initialState:{
        rooms: [],
        loading: false,
        error: null
    },
    extraReducers:{
        [getAllData.pending]: (state)=>{
            state.loading = true;
        },
        [getAllData.fulfilled]: (state,action)=>{
            state.loading = false;
            state.rooms = action.payload;   //vales fetched from backend are put into rooms
        },
        [getAllData.rejected]: (state,action)=>{
            state.loading = false;
            state.error = action.payload
        },
    }
})

export default getRoom.reducer;