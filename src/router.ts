import { Router } from 'express'
import {
  PeopleController,
  CarsController,
  StockController,
  SchoolController
} from './controller'

const router = Router()

router.post('/person', new PeopleController().create)
router.get('/person', new PeopleController().select)
router.get('/person/:id', new PeopleController().getPersonById)

router.post('/car', new CarsController().create)
router.get('/car', new CarsController().select)
router.get('/car/:id', new CarsController().getCarById)

router.post('/stock', new StockController().create)
router.get('/stock', new StockController().select)
router.get('/stock/:id', new StockController().getStockItem)

router.post('/school', new SchoolController().create)
router.get('/school', new SchoolController().select)
router.get('/school/:id', new SchoolController().getStudent)

export { router }
