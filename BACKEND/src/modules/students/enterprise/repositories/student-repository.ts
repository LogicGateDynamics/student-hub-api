import { Student } from '../entities/student'

export interface StudentRepository {
  save(Student: Student): Promise<void>
  delete(student: Student): Promise<void>
  findByMatricula(matricula: number): Promise<Student>
}
