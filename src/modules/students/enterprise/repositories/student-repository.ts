import { Student } from '../entities/student'

export interface StudentRepository {
  save(student: Student): Promise<void>
  findByMatricula(matricula: number): Promise<Student | null>
}
