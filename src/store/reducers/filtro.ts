import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FiltroState = {
  termo: string
}

const initialState: FiltroState = {
  termo: ''
}

const FiltroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})

export const { alteraTermo } = FiltroSlice.actions
export default FiltroSlice.reducer
