import { useState } from 'react'
import { cartTotal, readCart, writeCart, type CartLine } from '../lib/cart'
import { formatMoney } from '../lib/money'

export const CartPage = () => {
  const [lines, setLines] = useState<CartLine[]>(readCart())
  const clear = () => {
    writeCart([])
    setLines([])
  }
  if (lines.length === 0) {
    return (
      <section>
        <h1>Your cart</h1>
        <p>Your cart is empty.</p>
      </section>
    )
  }
  return (
    <section>
      <h1>Your cart</h1>
      <table className="lines">
        <tbody>
          {lines.map((line) => (
            <tr key={line.sku}>
              <td>{line.name}</td>
              <td>x {line.quantity}</td>
              <td>{formatMoney(line.price * line.quantity)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="total" data-testid="total">
        Total {formatMoney(cartTotal(lines))}
      </p>
      <button type="button" onClick={clear}>
        Empty cart
      </button>
      <p className="note">Checkout is switched off: this is a test shop.</p>
    </section>
  )
}
