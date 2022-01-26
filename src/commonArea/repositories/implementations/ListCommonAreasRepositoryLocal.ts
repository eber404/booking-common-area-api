import { CommonArea } from '@/commonArea/entities/CommonArea'
import { ListCommonAreasRepository } from '@/commonArea/repositories/CommonAreaRepository'
import { commonAreas } from '@/commonArea/data/commonAreas'

export class ListCommonAreasRepositoryLocal
  implements ListCommonAreasRepository
{
  async list(): Promise<CommonArea[]> {
    return commonAreas
  }
}
