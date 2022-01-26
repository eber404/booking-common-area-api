import { CommonArea } from '@/commonArea/entities/CommonArea'
import { GetCommonAreaRepository } from '../CommonAreaRepository'

import { commonAreas } from '@/commonArea/data/commonAreas'

export class GetCommonAreaRepositoryLocal implements GetCommonAreaRepository {
  get(id: string): Promise<CommonArea> {
    const area = commonAreas.find((area) => area.id === id)

    if (!area) return null

    return Promise.resolve(area)
  }
}
