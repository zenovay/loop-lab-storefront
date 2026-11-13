import { describe, expect, it } from 'vitest'
import { CATALOG, productById } from './catalog'
import { displayPrice, listPrice } from './pricing'

describe('displayPrice', () => {
  it('shows the first variant of a product with sizes', () => {
    const mug = productById('trail-mug')
    expect(mug).toBeDefined()
    expect(displayPrice(mug!)).toBe('$18.00')
  })

  it('shows a single-variant product', () => {
    expect(displayPrice(productById('field-notebook')!)).toBe('$12.00')
  })
})

describe('listPrice', () => {
  it('writes every product as a from-price', () => {
    for (const product of CATALOG) expect(listPrice(product)).toMatch(/^from \$\d+\.\d{2}$/)
  })
})
