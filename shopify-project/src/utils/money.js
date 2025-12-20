export function calcPrice(amountInCents) {
    return `$${(amountInCents /100).toFixed(2)}`
}