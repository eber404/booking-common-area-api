import { UserRole } from './UserRole'

export class User {
  public readonly id?: string
  public readonly name: string
  public readonly apartment: number
  public readonly role: UserRole

  constructor(props: User) {
    Object.assign(this, props)
  }
}
