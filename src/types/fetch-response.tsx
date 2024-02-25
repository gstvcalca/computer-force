import { Product } from "./product";

export interface ProductFetchResponse {
    // GraphIQL always enclosure its response in a data object
    data: {allProducts: Product[]}
}