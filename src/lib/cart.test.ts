import { describe, expect, it } from 'vitest'
import { addLine, cartTotal } from './cart'

describe('cart', () => {
  it('adds a new line, then increments it', () => {
    const one = addLine([], { sku: 'MUG-350', name: 'Trail Mug', price: 1800 })
    const two = addLine(one, { sku: 'MUG-350', name: 'Trail Mug', price: 1800 })
    expect(two).toEqual([{ sku: 'MUG-350', name: 'Trail Mug', price: 1800, quantity: 2 }])
  })

  it('totals price times quantity', () => {
    const lines = addLine(addLine([], { sku: 'A', name: 'A', price: 500 }), { sku: 'B', name: 'B', price: 250 })
    expect(cartTotal(lines)).toBe(750)
  })
})
