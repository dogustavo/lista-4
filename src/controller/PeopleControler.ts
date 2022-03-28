import { Request, Response } from 'express'

import { PeopleService } from '../services'

class PeopleController {
  constructor(private peopleService: PeopleService) {
    this.peopleService = new PeopleService()
  }

  async create(request: Request, response: Response) {
    try {
      const result = await this.peopleService.create(request.body)

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
    try {
      const result = await this.peopleService.select()

      return response.json({ data: result })
    } catch (error) {
      response.status(400).send({
        message: error.message
      })
    }
  }

  async getPersonById(request: Request, response: Response) {
    const { id } = request.params

    try {
      const result = await this.peopleService.getPersonById(
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

export default new PeopleController(new PeopleService())
