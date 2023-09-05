import { configureStore } from "@reduxjs/toolkit";
import getRoom from "./slice/roomslice"

export const store = configureStore({
    reducer: {
        room: getRoom,
    }
})