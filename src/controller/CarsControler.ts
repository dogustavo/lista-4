import { Request, Response } from 'express'

import { CarsService } from '../services'

class CarsController {
  constructor(private carService: CarsService) {
    this.carService = new CarsService()
  }

  async create(request: Request, response: Response) {
    try {
      const result = await this.carService.create(request.body)

      return response.json({ message: result.message })
    } catch (error) {
      response.status(417).send({
        message: error.message
      })
    }
  }

  async select(request: Request, response: Response) {
    try {
      const result = await this.carService.select()

      return response.json({ data: result })
    } catch (error) {
      response.status(400).send({
        message: error.message
      })
    }
  }

  async getCarById(request: Request, response: Response) {
    const { id } = request.params

    try {
      const result = await this.carService.getCarById(parseInt(id))

      return response.json({ data: result })
    } catch (error) {
      response.status(400).send({
        message: error.message
      })
    }
  }
}

export default new CarsController(new CarsService())
