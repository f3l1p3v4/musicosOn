import { NoticeRepository } from './src/infra/repositories/NoticeRepository'

export class ListNoticesUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private noticeRepository: NoticeRepository) {}

  async execute() {
    const notices = await this.noticeRepository.findAll()
    return notices
  }
}
