import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type favoritosState = {
    favs: Produto[]
}
const initialState: favoritosState = {
    favs: []
}

const favoritosSlice = createSlice({
    name: 'favoritos',
    initialState,
    reducers: {
        toggleFav: (state, action: PayloadAction<Produto>) => {
            const product = action.payload

            if (state.favs.find((p) => p.id === product.id)) {
                const favoritosSemProduto = state.favs.filter(
                    (p) => p.id !== product.id
                )
                state.favs = favoritosSemProduto
            } else {
                state.favs = [...state.favs, product]
            }
        }
    }
})

export const { toggleFav } = favoritosSlice.actions

export default favoritosSlice.reducer