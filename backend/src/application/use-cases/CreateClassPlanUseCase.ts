import { IClassPlanRepository } from './src/application/interfaces/IClassPlanRepository'
import { ClassPlan } from './src/domain/entities/ClassPlan'
import { CreateClassPlanDTO } from './src/application/dtos/CreateClassPlanDTO'

export class CreateClassPlanUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private classPlanRepository: IClassPlanRepository) {}

  async execute(data: CreateClassPlanDTO): Promise<ClassPlan> {
    if (!data.date || isNaN(new Date(data.date).getTime())) {
      throw new Error('Data inválida fornecida.')
    }

    if (!data.instructor_id) {
      throw new Error('Instructor ID é obrigatório.')
    }

    return this.classPlanRepository.create(data) // 🔥 Agora `date` já é `Date`
  }
}
