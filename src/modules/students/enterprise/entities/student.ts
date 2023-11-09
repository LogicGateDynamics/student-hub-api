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
  get matricula(): number {
    return this.props.matricula
  }

  get nome(): string {
    return this.props.nome
  }

  get curso(): string {
    return this.props.curso
  }

  get email(): string {
    return this.props.email
  }

  get senha(): string {
    return this.props.senha
  }

  get placaDoVeiculo(): string {
    return this.props.placaDoVeiculo
  }

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
