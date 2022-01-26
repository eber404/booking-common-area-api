import { ListBookingsDTO } from '@/booking/dtos/ListBookingsDTO'

import { ListBookingsUseCase } from './ListBookingsUseCase'

export class ListBookingsController {
  constructor(private readonly listBookingsUseCase: ListBookingsUseCase) {}

  async handle(): Promise<ListBookingsDTO> {
    return await this.listBookingsUseCase.execute()
  }
}
