import { EntityId } from '@core/entities/entity-id'
import { Student } from '@modules/students/enterprise/entities/student'
import { StudentRepository } from '@modules/students/enterprise/repositories/student-repository'
import { AppError } from '@errors/app-error'
import { inject, injectable } from 'tsyringe'

export interface CreateStudentUseCaseRequest {
  nome: string
  matricula: number
  curso: string
  email: string
  senha: string
  placaDoVeiculo: string
}
interface CreateStudentUseCaseResponse {
  student: Student
}
@injectable()
export class CreateStudentUseCase {
  constructor(
    @inject('studentRepository')
    private studentRepository: StudentRepository,
  ) {}

  public async execute({
    nome,
    matricula,
    curso,
    email,
    senha,
    placaDoVeiculo,
  }: CreateStudentUseCaseRequest): Promise<CreateStudentUseCaseResponse> {
    const studentAlreadyExists =
      await this.studentRepository.findByMatricula(matricula)
    if (studentAlreadyExists) throw new AppError('Student Already exists.')
    const newStudent = Student.create({
      nome,
      matricula,
      curso,
      email,
      senha,
      placaDoVeiculo,
      studentId: new EntityId(),
    })
    this.studentRepository.save(newStudent)

    return {
      student: newStudent,
    }
  }
}
