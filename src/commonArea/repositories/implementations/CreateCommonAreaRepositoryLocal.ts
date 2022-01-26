import crypto from 'crypto'

import { CommonArea } from '@/commonArea/entities/CommonArea'
import { CreateCommonAreaRepository } from '@/commonArea/repositories/CommonAreaRepository'
import { commonAreas } from '@/commonArea/data/commonAreas'

export class CreateCommonAreaRepositoryLocal
  implements CreateCommonAreaRepository
{
  async create({ ...areaDTO }: CommonArea): Promise<void> {
    const area = {
      id: crypto.randomUUID(),
      ...areaDTO,
    }

    commonAreas.push(area)
  }
}
