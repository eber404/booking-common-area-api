import { CommonArea } from '@/commonArea/entities/CommonArea'
import { CommonAreaStatus } from '@/commonArea/entities/CommonAreaStatus'
import { CreateCommonAreaRepository } from '@/commonArea/repositories/CommonAreaRepository'
import { CreateCommonAreaDTO } from '@/commonArea/dtos/CreateCommonAreaDTO'

export class CreateCommonAreaUseCase {
  constructor(
    public readonly createCommonAreaRepository: CreateCommonAreaRepository
  ) {}

  async execute(input: CreateCommonAreaDTO) {
    const { floor, status, title } = input

    const commonArea = new CommonArea({
      floor,
      status: CommonAreaStatus[status.toUpperCase()],
      title,
    })

    await this.createCommonAreaRepository.create(commonArea)
  }
}
