import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '015e869919msh262c977b271012fp13f54fjsn58d17095adba',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins';

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/exchanges')
        })
    })
});