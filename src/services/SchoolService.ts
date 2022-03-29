import { SchoolRepository } from '../repositories'
import { ISchools } from '../types'

export class SchoolService {
  private school: SchoolRepository

  constructor() {
    this.school = new SchoolRepository()
  }

  async create(props: ISchools) {
    try {
      const result = await this.school.create(props)

      return result
    } catch (error) {
      throw new Error(error)
    }
  }

  async select() {
    try {
      const result = await this.school.select()

      return result
    } catch (error) {
      throw new Error(error)
    }
  }

  async getStudent(id: number) {
    try {
      const result = await this.school.getStudent(id)

      return result
    } catch (error) {
      throw new Error(error)
    }
  }
}
