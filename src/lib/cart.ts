import type { Cents } from './money'

export type CartLine = { readonly sku: string; readonly name: string; readonly price: Cents; readonly quantity: number }

const KEY = 'loop-lab-cart'

export const readCart = (): CartLine[] => {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? (JSON.parse(raw) as CartLine[]) : []
  } catch {
    return []
  }
}

export const writeCart = (lines: readonly CartLine[]): void => {
  try {
    localStorage.setItem(KEY, JSON.stringify(lines))
  } catch {
    // A private window without storage keeps the cart for this page only.
  }
}

export const addLine = (lines: readonly CartLine[], line: Omit<CartLine, 'quantity'>): CartLine[] => {
  const found = lines.find((l) => l.sku === line.sku)
  if (found === undefined) return [...lines, { ...line, quantity: 1 }]
  return lines.map((l) => (l.sku === line.sku ? { ...l, quantity: l.quantity + 1 } : l))
}

export const cartTotal = (lines: readonly CartLine[]): Cents => lines.reduce((sum, l) => sum + l.price * l.quantity, 0)
