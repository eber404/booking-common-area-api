import { CreateBookingDTO } from '@/booking/dtos/CreateBookingDTO'
import { BadRequest } from '@/common/http/HttpError'
import { Controller, ControllerProps } from '@/common/interfaces/Controller'
import { validateObject } from '@/common/utils/validateObject'

import { CreateBookingUseCase } from './CreateBookingUseCase'

export class CreateBookingController implements Controller {
  constructor(private readonly createBookingUseCase: CreateBookingUseCase) {}

  async handle({ body }: ControllerProps) {
    const isValid = validateObject(body, 4, 4)

    if (!isValid) throw BadRequest('Informe as propriedades corretamente.')

    const createBooking: CreateBookingDTO = {
      areaId: body.areaId,
      endDate: body.endDate,
      startDate: body.startDate,
      userId: body.userId,
    }

    await this.createBookingUseCase.execute(createBooking)
  }
}
