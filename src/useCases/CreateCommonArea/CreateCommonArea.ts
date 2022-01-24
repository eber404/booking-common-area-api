import { CommonArea } from '@/entities/CommonArea'
import { CommonAreaStatus } from '@/entities/CommonAreaStatus'
import { CommonAreaRepository } from '@/repositories/CommonAreaRepository'
import { CreateCommonAreaInput } from './CreateCommonAreaInput'

export class CreateCommonArea {
  constructor(public readonly commonAreaRepository: CommonAreaRepository) {}

  async execute(input: CreateCommonAreaInput) {
    const { floor, status, title } = input

    const commonArea = new CommonArea({
      floor,
      status: CommonAreaStatus[status.toUpperCase()],
      title,
    })

    await this.commonAreaRepository.create(commonArea)
  }
}
