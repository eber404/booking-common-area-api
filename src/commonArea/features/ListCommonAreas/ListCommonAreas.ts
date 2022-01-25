import { CommonAreaRepository } from '@/commonArea/repositories/CommonAreaRepository'

import { ListCommonAreasOutput } from './ListCommonAreasOutput'

export class ListCommonAreas {
  constructor(private readonly commonAreaRepository: CommonAreaRepository) {}

  async execute(): Promise<ListCommonAreasOutput> {
    const areas = await this.commonAreaRepository.list()

    const output = {
      data: areas,
    }

    return output
  }
}
