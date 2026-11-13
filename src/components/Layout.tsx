import type { ReactNode } from 'react'
import { href } from '../lib/routes'

export const Layout = ({ children }: { readonly children: ReactNode }) => (
  <div className="shell">
    <header className="top">
      <a className="brand" href={href('/')}>
        Loop Lab Supply
      </a>
      <nav>
        <a href={href('/')}>Shop</a>
        <a href={href('/about')}>About</a>
        <a href={href('/cart')} data-testid="cart-link">
          Cart
        </a>
      </nav>
    </header>
    <main>{children}</main>
    <footer className="foot">A test storefront for Orvay's product loop. Nothing here is for sale.</footer>
  </div>
)
