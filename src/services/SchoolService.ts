import { openDb } from '../config/connection'

interface IPerson {
  student_name: string
  student_ra: string
  student_score: number
}

export class SchoolService {
  async create(props: IPerson) {
    const { student_name, student_ra, student_score } = props

    try {
      const db = await openDb
      await db.run(
        `INSERT INTO school (
          student_name,
          student_ra,
          student_score
        ) VALUES (?,?,?)`,
        [student_name, student_ra, student_score]
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

      const result = await db.all(`SELECT * FROM school`)

      return result
    } catch (error) {
      throw new Error(error)
    }
  }

  async getStudent(id: number) {
    try {
      const db = await openDb

      const result = await db.get(
        `SELECT * FROM school WHERE id = ?`,
        id
      )

      return result
    } catch (error) {
      throw new Error(error)
    }
  }
}
