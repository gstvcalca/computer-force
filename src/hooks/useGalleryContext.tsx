import { GalleryContext } from "@/context/gallery-context"
import { useContext } from "react"

export function useGalleryContext(){
    return useContext(GalleryContext)
}