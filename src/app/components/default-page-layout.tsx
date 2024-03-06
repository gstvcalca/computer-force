"use client"

import { GalleryContextProvider } from "@/context/gallery-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import styled from "styled-components";
import { Header } from "./header";

export const DefaultPageLayout = styled.div`
    padding: 5em 4em 0 7em;
    min-height: 90vh;
    background-color: var(--bg-primary);
`

export function DefaultPageLayoutf(){
    const client = new QueryClient()
    return(
        <QueryClientProvider client={client}>
            <GalleryContextProvider>
                <Header/>
                <DefaultPageLayout>
                        
                </DefaultPageLayout>
                <div>footer</div>
            </GalleryContextProvider>
        </QueryClientProvider>
    )
}