import type { Cents } from './money'

export type Variant = {
  readonly sku: string
  readonly label: string
  readonly price: Cents
}

export type Product = {
  readonly id: string
  readonly name: string
  readonly blurb: string
  /** The lowest price, shown on the product list. */
  readonly fromPrice: Cents
  /** Sizes, colours or amounts. Optional: some products have none. */
  readonly variants: readonly Variant[]
}

export const CATALOG: readonly Product[] = [
  {
    id: 'trail-mug',
    name: 'Trail Mug',
    blurb: 'Enamel camping mug that survives being dropped off a cliff.',
    fromPrice: 1800,
    variants: [
      { sku: 'MUG-350', label: '350 ml', price: 1800 },
      { sku: 'MUG-500', label: '500 ml', price: 2200 },
    ],
  },
  {
    id: 'canvas-tote',
    name: 'Canvas Tote',
    blurb: 'Heavy canvas, two inside pockets, carries a week of groceries.',
    fromPrice: 2900,
    variants: [
      { sku: 'TOTE-NAT', label: 'Natural', price: 2900 },
      { sku: 'TOTE-OLV', label: 'Olive', price: 2900 },
    ],
  },
  {
    id: 'field-notebook',
    name: 'Field Notebook',
    blurb: 'Waterproof paper, 96 pages, a pencil loop that stays put.',
    fromPrice: 1200,
    variants: [{ sku: 'NB-A6', label: 'A6', price: 1200 }],
  },
  {
    id: 'wool-socks',
    name: 'Wool Socks',
    blurb: 'Merino blend, cushioned heel, three pairs.',
    fromPrice: 2400,
    variants: [
      { sku: 'SOCK-S', label: 'Small', price: 2400 },
      { sku: 'SOCK-M', label: 'Medium', price: 2400 },
      { sku: 'SOCK-L', label: 'Large', price: 2600 },
    ],
  },
  {
    // A gift card has no sizes: the amount is chosen at checkout, so it carries no variants.
    id: 'gift-card',
    name: 'Gift Card',
    blurb: 'Let them pick. Delivered by email, never expires.',
    fromPrice: 2500,
    variants: [],
  },
]

export const productById = (id: string): Product | undefined => CATALOG.find((p) => p.id === id)
