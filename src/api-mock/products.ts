import type { Product } from './data'
import { products } from './data'

export type ResponseError = { error: string }
export const getProducts = () =>
  new Promise<Array<Product>>((resolve, reject) => {
    setTimeout(
      () => {
        if (Math.random() * 100 < 7) reject({ error: 'Ooops...' })
        resolve(products)
      },
      Math.floor(Math.random() * 2000)
    )
  })
