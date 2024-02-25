import { mountQuery } from "@/app/utils/graphiql"
import { ProductFetchResponse } from "@/types/fetch-response"
import { useQuery } from "@tanstack/react-query"
import axios, { AxiosPromise } from "axios"
import { useGalleryContext } from "./useGalleryContext"
import { SortPriority } from "@/types/sort-priority"
import { useDeferredValue } from "react"


const API_URL = process.env.NEXT_PUBLIC_API_URL as string

const fetcher = (queryString: string): AxiosPromise<ProductFetchResponse> => {
    return axios.post(API_URL, {query: queryString})
}

export function useProducts(){
    const {category, priority, search} = useGalleryContext();
    const deferredSearch = useDeferredValue(search).toLowerCase();
    console.log(SortPriority[priority]);
    const queryString = mountQuery(category, priority);
    const {data} = useQuery({
        queryFn:() => fetcher(queryString),
        queryKey: ['product', category, priority]
    })
    console.log(data)
    const products = data?.data?.data?.allProducts

    return {
        // useQuery data, axios data, GraphIQL data
        product: products?.filter(product => product.name.toLowerCase().includes(deferredSearch))
    }
}