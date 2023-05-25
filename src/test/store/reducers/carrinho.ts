import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

export type CarrinhoState = {
    itens: Produto[]
}
const initialState: CarrinhoState = {
    itens: []
}

const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        adicionar: (state, action: PayloadAction<Produto>) => {
            const produtoN = action.payload
            const itens = state.itens

            if (state.itens.find((produto) => produto.id === produtoN.id)) {
                alert('O item já se encontra no carrinho')
            } else {
                state.itens = [...itens, produtoN]
            }
        }
    }
})

export const { adicionar } = carrinhoSlice.actions

export default carrinhoSlice.reducer