import { CommonArea } from './CommonArea'
import { User } from './User'

export class Location {
  public readonly locator: User
  public readonly area: CommonArea
  public readonly startDate: Date
  public readonly endDate: Date

  constructor(props: Location) {
    Object.assign(this, props)
  }
}
