import 'reflect-metadata'
import { expect, beforeEach, describe, it } from 'vitest'
import { InMemoryStudentRepository } from '../../repositories/in-memory-student-repository'
import { CreateStudentUseCase } from './create-student.useCase'
import { AppError } from '@errors/app-error'

let inMemoryStudentRepository: InMemoryStudentRepository
let createQuestionUseCase: CreateStudentUseCase

describe('Create an Student', () => {
  beforeEach(() => {
    inMemoryStudentRepository = new InMemoryStudentRepository()
    createQuestionUseCase = new CreateStudentUseCase(inMemoryStudentRepository)
  })
  it('Should be able to create an student', async () => {
    const { student } = await createQuestionUseCase.execute({
      curso: 'Eng. de Software',
      email: '123432434@universidade.com.br',
      matricula: 123432434,
      nome: 'Fernando dos Santos',
      senha: 'F3RN4Nd0123',
      placaDoVeiculo: 'CTPS-1234',
    })
    expect(student.id).toBeTruthy()
    expect(inMemoryStudentRepository.repository[0].id).toEqual(student.id)
  })

  it('Should not be able to create an student when it has already been registered', async () => {
    await createQuestionUseCase.execute({
      curso: 'Eng. de Software',
      email: '123432434@universidade.com.br',
      matricula: 123432434,
      nome: 'Fernando dos Santos',
      senha: 'F3RN4Nd0123',
      placaDoVeiculo: 'CTPS-1234',
    })
    expect(async () => {
      await createQuestionUseCase.execute({
        curso: 'Eng. de Software',
        email: '123432434@universidade.com.br',
        matricula: 123432434,
        nome: 'Fernando dos Santos',
        senha: 'F3RN4Nd0123',
        placaDoVeiculo: 'CTPS-1234',
      })
    }).rejects.toBeInstanceOf(AppError)
  })
})
