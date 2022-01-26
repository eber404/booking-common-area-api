import { ListCommonAreasRepository } from '@/commonArea/repositories/CommonAreaRepository'
import { ListCommonAreasDTO } from '@/commonArea/dtos/ListCommonAreasDTO'

export class ListCommonAreasUseCase {
  constructor(
    private readonly listCommonAreaRepository: ListCommonAreasRepository
  ) {}

  async execute(): Promise<ListCommonAreasDTO> {
    const areas = await this.listCommonAreaRepository.list()

    const output = {
      data: areas,
    }

    return output
  }
}
