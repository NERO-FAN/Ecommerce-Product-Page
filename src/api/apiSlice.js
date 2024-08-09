import { createApi, fetchBaseQuery } from  '@reduxjs/toolkit/query/react';

export const apiSlice = createApi ({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8080'}),
    endpoints: (builder) => ({
        getState: builder.query({
            query: () => '/',
        }),
        addItem: builder.mutation({
            query: (item) => ({
                url: `/cart_item/${item.id}`,
                method: 'POST',
                body: userDetails
            })
        })
    })
});

export const {
    useGetStateQuery
}  = apiSlice;