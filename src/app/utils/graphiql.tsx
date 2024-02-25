export const queryString = `
    query {
        allProducts {
            name,
            description,
            category,
            price_in_cents,
            image_url
        }
    }
`