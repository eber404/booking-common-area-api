import { CommonArea } from '@/entities/CommonArea'

export interface CommonAreaRepository {
  create(area: CommonArea): Promise<void>
  get(id: string): Promise<CommonArea>
  list(): Promise<CommonArea[]>
}
