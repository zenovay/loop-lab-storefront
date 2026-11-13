import type { Product } from './catalog'
import { formatMoney } from './money'

/** The price shown on a product's own page: its first variant's price. */
export const displayPrice = (product: Product): string => formatMoney(product.variants[0].price)

/** The "from" price on the product list. */
export const listPrice = (product: Product): string => `from ${formatMoney(product.fromPrice)}`
