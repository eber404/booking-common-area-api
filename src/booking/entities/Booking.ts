import { CommonArea } from '@/commonArea/entities/CommonArea'
import { User } from '@/user/entities/User'

export class Booking {
  public readonly id?: string
  public readonly locator: User
  public readonly area: CommonArea
  public readonly startDate: Date
  public readonly endDate: Date

  constructor(props: Booking) {
    Object.assign(this, props)
  }
}
