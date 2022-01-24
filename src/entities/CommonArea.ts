import crypto from 'crypto'

import { CommonAreaStatus } from './CommonAreaStatus'

export class CommonArea {
  public readonly id: string
  public readonly title: string
  public readonly floor: number
  public readonly status: CommonAreaStatus

  constructor(props: Omit<CommonArea, 'id'>) {
    Object.assign(this, props)

    this.id = crypto.randomUUID()
  }
}
