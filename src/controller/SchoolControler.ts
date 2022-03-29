import { Request, Response } from 'express'

import { SchoolService } from '../services'

class SchoolController {
  constructor(private schoolService: SchoolService) {
    this.schoolService = new SchoolService()
  }

  async create(request: Request, response: Response) {
    try {
      const result = await this.schoolService.create(request.body)

      return response.json({ message: result.message })
    } catch (error) {
      response.status(417).send({
        message: error.message
      })
    }
  }

  async select(request: Request, response: Response) {
    try {
      const result = await this.schoolService.select()

      return response.json({ data: result })
    } catch (error) {
      response.status(400).send({
        message: error.message
      })
    }
  }

  async getStudent(request: Request, response: Response) {
    const { id } = request.params
    try {
      const result = await this.schoolService.getStudent(parseInt(id))

      return response.json({ data: result })
    } catch (error) {
      response.status(400).send({
        message: error.message
      })
    }
  }
}

export default new SchoolController(new SchoolService())
