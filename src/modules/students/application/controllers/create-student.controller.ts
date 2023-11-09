import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { hash } from 'bcryptjs'
import { CreateStudentUseCase } from '../use-cases/create-student/create-student.useCase'

export class CreateStudentController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { nome, matricula, curso, email, senha, placaDoVeiculo } =
      request.body
    const passwordHash = await hash(senha, 8)
    const createStudentUseCase = container.resolve(CreateStudentUseCase)
    await createStudentUseCase.execute({
      nome,
      matricula,
      curso,
      email,
      senha: passwordHash,
      placaDoVeiculo,
    })
    return response.status(201).send()
  }
}
