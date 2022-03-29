import { Router } from 'express'
import {
  PeopleController,
  CarsController,
  SchoolController,
  StockController
} from './controller'

const router = Router()

function getControllerInstance(controller: any, method: string) {
  return controller[method].bind(controller)
}

router.post(
  '/person',
  getControllerInstance(PeopleController, 'create')
)
router.get(
  '/person',
  getControllerInstance(PeopleController, 'select')
)
router.get(
  '/person/:id',
  getControllerInstance(PeopleController, 'getPersonById')
)

router.post('/car', getControllerInstance(CarsController, 'create'))
router.get('/car', getControllerInstance(CarsController, 'select'))
router.get(
  '/car/:id',
  getControllerInstance(CarsController, 'getCarById')
)

router.post(
  '/school',
  getControllerInstance(SchoolController, 'create')
)
router.get(
  '/school',
  getControllerInstance(SchoolController, 'select')
)
router.get(
  '/school/:id',
  getControllerInstance(SchoolController, 'getStudent')
)

router.post('/stock', new StockController().create)
router.get('/stock', new StockController().select)
router.get('/stock/:id', new StockController().getStockItem)

export { router }
