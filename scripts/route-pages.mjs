// GitHub Pages serves files, not routes. Copy the built index.html to each route's folder so
// /product/, /cart/ and /about/ answer 200 with the app, and 404.html catches anything else.
import { copyFileSync, mkdirSync } from 'node:fs'

const ROUTES = ['product', 'cart', 'about']
for (const route of ROUTES) {
  mkdirSync(`dist/${route}`, { recursive: true })
  copyFileSync('dist/index.html', `dist/${route}/index.html`)
}
copyFileSync('dist/index.html', 'dist/404.html')
console.log(`route pages written: ${ROUTES.join(', ')}, 404`)
