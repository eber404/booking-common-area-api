import crypto from 'crypto'

import { UserRole } from './UserRole'

export class User {
  public readonly id?: string
  public readonly name: string
  public readonly apartment: number
  public readonly role: UserRole

  constructor(props: Omit<User, 'id'>) {
    Object.assign(this, props)

    if (!this.id) {
      this.id = crypto.randomUUID()
    }
  }
}
