import { SingleProductQuery } from "@/app/utils/graphiql";
import { Product, SingleFetchResponse } from "@/types/product";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string

const fetcher = (queryString: string): AxiosPromise<SingleFetchResponse> => {
    return axios.post(API_URL, {query: queryString})
}

export function useProduct<T>(id: string){
    const {data} = useQuery({
        queryFn: () => fetcher(SingleProductQuery(id)),
        queryKey: ['product', id],
        enabled: !!id,
        staleTime: 1000 * 60 * 5
    })
    return data?.data?.data?.Product
};
