import { openDb } from '../config/connection'
import { ICar } from '../types'

export class CarsRepository {
  async create(props: ICar) {
    const { car_type, color, qty_passengers } = props

    try {
      const db = await openDb
      await db.run(
        'INSERT INTO cars (car_type, color, qty_passengers) VALUES (?,?,?)',
        [car_type, color, qty_passengers]
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

      const result = await db.all(`SELECT * FROM cars`)

      return result
    } catch (error) {
      throw new Error(error)
    }
  }

  async getCarById(id: number) {
    try {
      const db = await openDb

      const result = await db.get(
        `SELECT * FROM cars WHERE id = ?`,
        id
      )

      return result
    } catch (error) {
      throw new Error(error)
    }
  }
}
