import { InMemoryStudentRepository } from '@modules/students/application/repositories/in-memory-student-repository'
import { StudentRepository } from '@modules/students/enterprise/repositories/student-repository'
import { container } from 'tsyringe'

container.registerSingleton<StudentRepository>(
  'studentRepository',
  InMemoryStudentRepository,
)
