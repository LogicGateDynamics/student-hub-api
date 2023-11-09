import Express from 'express'
import { studentRoutes } from './student.router'

const routes = Express.Router()

routes.use('/students', studentRoutes)
export default routes
