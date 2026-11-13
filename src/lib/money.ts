/** An amount in cents. */
export type Cents = number

export const formatMoney = (cents: Cents): string => `$${(cents / 100).toFixed(2)}`
