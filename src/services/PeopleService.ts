import { PeopleRepository } from '../repositories'

interface IPerson {
  first_name: string
  second_name: string
  document: string
  age: number
}

export class PeopleService {
  private people: PeopleRepository

  constructor() {
    this.people = new PeopleRepository()
  }

  async create(person: IPerson) {
    try {
      await this.people.create(person)

      return {
        status: 200,
        message: 'Salvo com sucesso'
      }
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
