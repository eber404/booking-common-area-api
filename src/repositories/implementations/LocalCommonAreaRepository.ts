import { CommonArea } from '@/entities/CommonArea'

export class LocalCommonAreaRepository {
  public readonly areas = []

  async create(area: CommonArea): Promise<void> {
    this.areas.push(area)
  }
}
