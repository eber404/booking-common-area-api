import { BadRequest } from '@/common/http/HttpError'
import { Controller, ControllerProps } from '@/common/interfaces/Controller'
import { validateObject } from '@/common/utils/validateObject'

import { UpdateUserUseCase } from './UpdateUserUseCase'

export class UpdateUserController implements Controller {
  constructor(private readonly updateUserUseCase: UpdateUserUseCase) {}

  async handle({ body, params }: ControllerProps) {
    if (!params.id) throw BadRequest('Pass id via param.')
    if (!body)
      throw BadRequest('Body should contain properties to update user.')

    const isValid = validateObject(body, 1, 3)

    if (!isValid)
      throw BadRequest('Invalid length of properties or undefined props.')

    const id = params.id
    const user = body

    await this.updateUserUseCase.execute({ id, ...user })
  }
}
