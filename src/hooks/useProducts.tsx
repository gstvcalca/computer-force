import axios, { AxiosPromise } from "axios";
import { useGalleryContext } from "./useGalleryContext";
import { useDeferredValue } from "react";
import { ProductFetchResponse } from "@/types/product";


const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (): AxiosPromise<ProductFetchResponse> => {
    return axios.get(API_URL)
}

export function useProducts():AxiosPromise<ProductFetchResponse>{
    const {category, priority, search} = useGalleryContext();
    const deferredSearch = useDeferredValue(search).toLowerCase();
    const data = fetcher();


    return (
        // useQuery data, axios data, GraphIQL data
        //product: data?.filter(product => product.name.toLowerCase().includes(deferredSearch))
        data
)
}