import { queryString } from "@/app/utils/graphiql"
import { ProductFetchResponse } from "@/types/fetch-response"
import { useQuery } from "@tanstack/react-query"
import axios, { AxiosPromise } from "axios"


const API_URL = process.env.NEXT_PUBLIC_API_URL as string

const fetcher = (queryString: string): AxiosPromise<ProductFetchResponse> => {
    return axios.post(API_URL, {query: queryString})
}

export function useProducts(){
    const {data} = useQuery({
        queryFn:() => fetcher(queryString),
        queryKey: ['product']
    })
    console.log(data)
    return {
        // useQuery data, axios data, GraphIQL data
        product: data?.data?.data?.allProducts
    }
}