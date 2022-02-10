import { configureStore, createSlice } from '@reduxjs/toolkit';
const initialState= { load: false, data: {}, error:""}
const testing = createSlice({
    name: 'test',
    initialState,
    reducers: {
        loading(state) {
            state.load = true;
        },
        success(state, action) {
            state.data = action.payload;
        },
        reject(state,action) {
            state.error = action.payload;
        }
    }
})

const store = configureStore({
    reducer: testing.reducer
});
// export  const testingActions = testing.actions;

export default store;