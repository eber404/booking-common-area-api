import { CommonArea } from '@/commonArea/entities/CommonArea'
import { User } from '@/user/entities/User'

export class Location {
  public readonly locator: User
  public readonly area: CommonArea
  public readonly startDate: Date
  public readonly endDate: Date

  constructor(props: Location) {
    Object.assign(this, props)
  }
}
