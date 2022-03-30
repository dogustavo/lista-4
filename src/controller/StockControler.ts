import { Request, Response } from 'express'

import { StockService } from '../services'

class StockController {
  constructor(private stockService: StockService) {
    this.stockService = new StockService()
  }

  async create(request: Request, response: Response) {
    try {
      const result = await this.stockService.create(request.body)

      return response.json({ message: result.message })
    } catch (error) {
      response.status(417).send({
        message: error.message
      })
    }
  }

  async select(request: Request, response: Response) {
    try {
      const result = await this.stockService.select()

      return response.json({ data: result })
    } catch (error) {
      response.status(400).send({
        message: error.message
      })
    }
  }

  async getStockItem(request: Request, response: Response) {
    const { id } = request.params

    try {
      const result = await this.stockService.getStockItem(
        parseInt(id)
      )

      return response.json({ data: result })
    } catch (error) {
      response.status(400).send({
        message: error.message
      })
    }
  }
}

export default new StockController(new StockService())
