import { CarsRepository } from '../repositories'
import { ICar } from '../types'

export class CarsService {
  private cars: CarsRepository

  constructor() {
    this.cars = new CarsRepository()
  }

  async create(props: ICar) {
    try {
      const result = await this.cars.create(props)

      return result
    } catch (error) {
      throw new Error(error)
    }
  }

  async select() {
    try {
      const result = await this.cars.select()

      return result
    } catch (error) {
      throw new Error(error)
    }
  }

  async getCarById(id: number) {
    try {
      const result = await this.cars.getCarById(id)

      return result
    } catch (error) {
      throw new Error(error)
    }
  }
}
