import { CATALOG } from '../lib/catalog'
import { listPrice } from '../lib/pricing'
import { href } from '../lib/routes'

export const ProductList = () => (
  <section>
    <h1>Gear for the long way round</h1>
    <ul className="grid">
      {CATALOG.map((product) => (
        <li key={product.id} className="card">
          <a href={href('/product', `?id=${product.id}`)} data-testid={`product-${product.id}`}>
            <h2>{product.name}</h2>
            <p>{product.blurb}</p>
            <p className="price">{listPrice(product)}</p>
          </a>
        </li>
      ))}
    </ul>
  </section>
)
