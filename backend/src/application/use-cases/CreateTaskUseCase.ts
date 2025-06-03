import { TaskRepository } from './src/infra/repositories/TaskRepository'
import { CreateTaskDTO } from './src/application/dtos/CreateTaskDTO'
import { AppError } from './src/infra/errors/AppError'

export class CreateTaskUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private taskRepository: TaskRepository) {}

  async execute(instructorId: string, data: CreateTaskDTO) {
    if (!data.studentId && !data.group) {
      throw new AppError('You must specify either a studentId or a group', 400)
    }

    if (data.studentId && data.group) {
      throw new AppError(
        'You can only specify a studentId or a group, not both',
        400,
      )
    }

    const task = await this.taskRepository.create(data, instructorId)

    return task
  }
}
