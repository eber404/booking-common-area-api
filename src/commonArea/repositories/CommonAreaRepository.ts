import { CommonArea } from '@/commonArea/entities/CommonArea'

export interface CreateCommonAreaRepository {
  create(area: CommonArea): Promise<void>
}

export interface ListCommonAreasRepository {
  list(): Promise<CommonArea[]>
}

export interface GetCommonAreaRepository {
  get(id: string): Promise<CommonArea>
}
