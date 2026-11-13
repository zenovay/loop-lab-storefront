/** The route inside the app, with the Pages base path removed: '/', '/product', '/cart' or '/about'. */
export const currentRoute = (): string => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  const path = window.location.pathname.slice(base.length).replace(/\/$/, '')
  return path === '' ? '/' : path
}

export const href = (route: string, query = ''): string => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  const path = route === '/' ? '/' : `${route}/`
  return `${base}${path}${query}`
}
