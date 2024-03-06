export interface Product{
    name: string,
    id: string,
    image_url: string,
    category: string,
    price_in_cents: number,
    description: string,
    quantity?: number
}

export interface ProductFetchResponse {
    // GraphIQL always enclosure its response in a data object
    data: {allProducts: Product[]}
}

export interface SingleFetchResponse {
    data: {Product: Product}
}

export const modelProduct = {
    name: '',
    id: '',
    image_url: '',
    category: '',
    price_in_cents: 0,
    description: '',
    quantity: 0 
}
