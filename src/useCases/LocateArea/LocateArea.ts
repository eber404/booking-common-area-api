import { LocationRepository } from '@/repositories/LocationRepository'
import { Location } from '@/entities/Location'
import { UserRepository } from '@/repositories/UserRepository'
import { CommonAreaRepository } from '@/repositories/CommonAreaRepository'

import { LocateAreaInput } from './LocateAreaInput'
export class LocateArea {
  constructor(
    public readonly locationRepository: LocationRepository,
    public readonly userRepository: UserRepository,
    public readonly areaRepository: CommonAreaRepository
  ) {}

  async execute(input: LocateAreaInput) {
    const { areaId, endDate, startDate, userId } = input
  }
}
