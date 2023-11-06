import { Entity } from '@core/entities/entity'
import { EntityId } from '@core/entities/entity-id'
import { Optional } from '../../../../core/types/optional'

interface StudentProps {
  studentId: EntityId
  nome: string
  matricula: number
  curso: string
  email: string
  senha: string
  placaDoVeiculo: string
}
export class Student extends Entity<StudentProps> {
  public static create(
    props: Optional<StudentProps, 'placaDoVeiculo'>,
    id?: EntityId,
  ): Student {
    const student = new Student(
      {
        placaDoVeiculo: '',
        ...props,
      },
      id,
    )

    return student
  }
}
