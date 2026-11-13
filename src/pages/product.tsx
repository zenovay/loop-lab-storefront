import { useState } from 'react'
import { addLine, readCart, writeCart } from '../lib/cart'
import { productById } from '../lib/catalog'
import { displayPrice } from '../lib/pricing'
import { href } from '../lib/routes'

export const ProductPage = () => {
  const id = new URLSearchParams(window.location.search).get('id') ?? ''
  const product = productById(id)
  const [added, setAdded] = useState(false)

  if (product === undefined) {
    return (
      <section>
        <h1>Not found</h1>
        <p>
          No product is called that. <a href={href('/')}>Back to the shop</a>.
        </p>
      </section>
    )
  }

  const add = () => {
    const variant = product.variants[0]
    const line = variant === undefined
      ? { sku: product.id, name: product.name, price: product.fromPrice }
      : { sku: variant.sku, name: `${product.name} (${variant.label})`, price: variant.price }
    writeCart(addLine(readCart(), line))
    setAdded(true)
  }

  return (
    <section className="product">
      <h1>{product.name}</h1>
      <p>{product.blurb}</p>
      <p className="price" data-testid="price">
        {displayPrice(product)}
      </p>
      {product.variants.length > 1 && (
        <p className="variants">Available in {product.variants.map((v) => v.label).join(', ')}.</p>
      )}
      <button type="button" onClick={add} data-testid="add-to-cart">
        Add to cart
      </button>
      {added && <p role="status">Added. <a href={href('/cart')}>View your cart</a>.</p>}
    </section>
  )
}
