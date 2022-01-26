import { BadRequest } from '@/common/http/HttpError'
import { Controller, ControllerProps } from '@/common/interfaces/Controller'
import { validateObject } from '@/common/utils/validateObject'

import { CreateCommonAreaUseCase } from './CreateCommonAreaUseCase'

export class CreateCommonAreaController implements Controller {
  constructor(
    private readonly createCommonAreaUseCase: CreateCommonAreaUseCase
  ) {}

  async handle({ body }: ControllerProps) {
    const isValid = validateObject(body, 3, 3)

    if (!isValid) throw BadRequest('Propriedades inválidas.')

    await this.createCommonAreaUseCase.execute({
      floor: body.floor,
      status: body.status,
      title: body.title,
    })
  }
}
