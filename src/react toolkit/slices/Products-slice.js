import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProduct = createAsyncThunk("productSlice/fetchProducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
});
const productSlice = createSlice({
  name: 'productSlice',
  initialState: [],
  reducers: {},
  extraReducers : (builder)=>{ builder.addCase(fetchProduct.fulfilled ,
     (state , action)=>{
    return action.payload
  })}
  
});

export const {} = productSlice.actions;

export default productSlice.reducer;