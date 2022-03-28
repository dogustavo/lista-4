import { openDb } from '../config/connection'

interface IPerson {
  first_name: string
  second_name: string
  document: string
  age: number
}

export class PeopleRepository {
  async create(props: IPerson) {
    const { first_name, second_name, document, age } = props

    try {
      const db = await openDb
      await db.run(
        'INSERT INTO people (first_name, second_name, document, age) VALUES (?,?,?,?)',
        [first_name, second_name, document, age]
      )

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
      const db = await openDb

      const result = await db.all(`SELECT * FROM people`)

      return result
    } catch (error) {
      throw new Error(error)
    }
  }

  async getPersonById(id: number) {
    try {
      const db = await openDb

      const result = await db.get(
        `SELECT * FROM people WHERE id = ?`,
        id
      )

      return result
    } catch (error) {
      throw new Error(error)
    }
  }
}
