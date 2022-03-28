import { Request, Response } from 'express'

import { StockService } from '../services'

export class StockController {
  async create(request: Request, response: Response) {
    const service = new StockService()

    try {
      const result = await service.create(request.body)

      return response
        .status(result.status)
        .json({ message: result.message })
    } catch (error) {
      response.status(417).send({
        message: error.message
      })
    }
  }

  async select(request: Request, response: Response) {
    const service = new StockService()
    try {
      const result = await service.select()

      return response.json({ data: result })
    } catch (error) {
      response.status(400).send({
        message: error.message
      })
    }
  }

  async getStockItem(request: Request, response: Response) {
    const { id } = request.params

    const service = new StockService()

    try {
      const result = await service.getStockItem(parseInt(id))

      return response.json({ data: result })
    } catch (error) {
      response.status(400).send({
        message: error.message
      })
    }
  }
}
