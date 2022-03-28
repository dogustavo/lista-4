import { openDb } from '../config/connection'

interface IPerson {
  product_name: string
  product_desc: string
  product_qty: number
  product_price: number
}

export class StockService {
  async create(props: IPerson) {
    const { product_name, product_desc, product_qty, product_price } =
      props

    try {
      const db = await openDb
      await db.run(
        `INSERT INTO stock (
          product_name,
          product_desc,
          product_qty,
          product_price
        ) VALUES (?,?,?,?)`,
        [product_name, product_desc, product_qty, product_price]
      )

      return {
        status: 200,
        message: 'Salvo com sucesso'
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  async select() {
    try {
      const db = await openDb

      const result = await db.all(`SELECT * FROM stock`)

      return result
    } catch (error) {
      throw new Error(error)
    }
  }

  async getStockItem(id: number) {
    try {
      const db = await openDb

      const result = await db.get(
        `SELECT * FROM stock WHERE id = ?`,
        id
      )

      return result
    } catch (error) {
      throw new Error(error)
    }
  }
}
