import { Request, Response } from 'express'

import { PeopleService } from '../services'

export class PeopleController {
  async create(request: Request, response: Response) {
    const service = new PeopleService()

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
    const service = new PeopleService()
    try {
      const result = await service.select()

      return response.json({ data: result })
    } catch (error) {
      response.status(400).send({
        message: error.message
      })
    }
  }

  async getPersonById(request: Request, response: Response) {
    const { id } = request.params

    const service = new PeopleService()

    try {
      const result = await service.getPersonById(parseInt(id))

      return response.json({ data: result })
    } catch (error) {
      response.status(400).send({
        message: error.message
      })
    }
  }
}
