import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Produto } from '../App'

const productsApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fake-api-tau.vercel.app'
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<Produto[], void>({
            query: () => 'api/ebac_sports'
        })
    })
})

export const { useGetProductsQuery } = productsApi

export default productsApi