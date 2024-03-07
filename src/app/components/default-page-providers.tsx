import { GalleryContextProvider } from "@/context/gallery-context"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Header } from "./header"
import { DefaultPageLayout } from "./default-page-layout"
import { ReactNode } from "react"

interface DefaultPageProvidersProps {
    children: ReactNode
}
export function DefaultPageProviders({children} : DefaultPageProvidersProps){
    const client = new QueryClient()
    return(
        <QueryClientProvider client={client}>
            <GalleryContextProvider>
                        {children}
            </GalleryContextProvider>
        </QueryClientProvider>
    )
}
