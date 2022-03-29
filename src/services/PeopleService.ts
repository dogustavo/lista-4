import { PeopleRepository } from '../repositories'
import { IPerson } from '../types'

export class PeopleService {
  private people: PeopleRepository

  constructor() {
    this.people = new PeopleRepository()
  }

  async create(person: IPerson) {
    try {
      const result = await this.people.create(person)

      return result
    } catch (error) {
      throw new Error(error)
    }
  }

  async select() {
    try {
      const result = await this.people.select()

      return result
    } catch (error) {
      throw new Error(error)
    }
  }

  async getPersonById(id: number) {
    try {
      const result = await this.people.getPersonById(id)

      return result
    } catch (error) {
      throw new Error(error)
    }
  }
}
