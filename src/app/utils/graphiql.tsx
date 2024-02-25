import { ProductCategory } from "@/types/product-category";
import { SortPriority } from "@/types/sort-priority";

export function mountQuery(category: ProductCategory, priority: SortPriority){
    let filterString = ''
    if(category != ProductCategory.all){
        filterString = `, filter: {category: "${ProductCategory[category]}"}`
    }

    let sortField = ['created_at', 'price_in_cents', 'price_in_cents', 'sales'][priority]
    let sortOrder = ['DSC', 'ASC', 'DSC', 'DSC'][priority]
    let sortString = `(sortField: "${sortField}", sortOrder: "${sortOrder}"${filterString})`

    return `query {
                allProducts${sortString}{
                    name,
                    description,
                    category,
                    price_in_cents,
                    image_url
                }
            }`
}