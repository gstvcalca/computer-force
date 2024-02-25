export function FormatPrice(price_in_cents: number){
    const rounded_price = Math.floor(price_in_cents/100)
    return rounded_price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}