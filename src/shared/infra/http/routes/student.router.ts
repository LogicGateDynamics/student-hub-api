import { Router } from 'express'
import { CreateStudentController } from '@modules/students/application/controllers/create-student.controller'

const studentRoutes = Router()
const createStudentController = new CreateStudentController()

studentRoutes.post('/', createStudentController.handle)

export { studentRoutes }
