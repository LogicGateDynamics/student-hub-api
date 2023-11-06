import { Student } from "@modules/students/enterprise/entities/student";
import { StudentRepository } from "@modules/students/enterprise/repositories/student-repository";

export class InMemoryStudentRepository implements StudentRepository {
  public repository: Student[] = []

  public async save(student: Student): Promise<void> {
    this.repository.push(student)
  }

  public async findByMatricula(matricula: number): Promise<Student | null> {
    const studentFound = this.repository.find(
      (student) => student.matricula === matricula,
    )
    if (studentFound) return studentFound
    return null  
  }
  
}