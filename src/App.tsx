import type { ComponentType } from 'react'
import { Layout } from './components/Layout'
import { currentRoute } from './lib/routes'
import { AboutPage } from './pages/about'
import { CartPage } from './pages/cart'
import { ProductList } from './pages/index'
import { ProductPage } from './pages/product'

const PAGES: Record<string, ComponentType> = {
  '/': ProductList,
  '/product': ProductPage,
  '/cart': CartPage,
  '/about': AboutPage,
}

export const App = () => {
  const Page = PAGES[currentRoute()] ?? ProductList
  return (
    <Layout>
      <Page />
    </Layout>
  )
}
