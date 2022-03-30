import { openDb } from '../config/connection'
import { StockRepository } from '../repositories'
import { IStock } from '../types'

export class StockService {
  private stock: StockRepository

  constructor() {
    this.stock = new StockRepository()
  }

  async create(props: IStock) {
    try {
      const result = await this.stock.create(props)

      return result
    } catch (error) {
      throw new Error(error)
    }
  }

  async select() {
    try {
      const result = await this.stock.select()

      return result
    } catch (error) {
      throw new Error(error)
    }
  }

  async getStockItem(id: number) {
    try {
      const result = this.stock.getStockItem(id)

      return result
    } catch (error) {
      throw new Error(error)
    }
  }
}
