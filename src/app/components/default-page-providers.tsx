import { GalleryContextProvider } from "@/context/gallery-context"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"
import { ThemeProvider } from "styled-components"

interface DefaultPageProvidersProps {
    children: ReactNode
}

const theme = {
    DesktopBreakpoint: "950px",
    TabletBreakpoint: "768px"
}
export function DefaultPageProviders({children} : DefaultPageProvidersProps){
    const client = new QueryClient()
    return(
        <QueryClientProvider client={client}>
            <GalleryContextProvider>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </GalleryContextProvider>
        </QueryClientProvider>
    )
}
