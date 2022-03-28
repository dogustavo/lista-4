import { Request, Response } from 'express'

import { SchoolService } from '../services'

export class SchoolController {
  async create(request: Request, response: Response) {
    const service = new SchoolService()

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
    const service = new SchoolService()
    try {
      const result = await service.select()

      return response.json({ data: result })
    } catch (error) {
      response.status(400).send({
        message: error.message
      })
    }
  }

  async getStudent(request: Request, response: Response) {
    const { id } = request.params

    const service = new SchoolService()

    try {
      const result = await service.getStudent(parseInt(id))

      return response.json({ data: result })
    } catch (error) {
      response.status(400).send({
        message: error.message
      })
    }
  }
}
