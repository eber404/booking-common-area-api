import { CommonArea } from '@/commonArea/entities/CommonArea'

export class CommonAreaRepositoryLocal {
  public readonly areas = []

  async create(area: CommonArea): Promise<void> {
    this.areas.push(area)
  }
}
