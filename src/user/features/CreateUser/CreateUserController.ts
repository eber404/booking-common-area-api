import { BadRequest } from '@/common/http/HttpError'
import { Controller, ControllerProps } from '@/common/interfaces/Controller'
import { validateObject } from '@/common/utils/validateObject'

import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController implements Controller {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  async handle({ body }: ControllerProps): Promise<void> {
    const isValid = validateObject(body, 3, 3)

    if (!isValid) throw BadRequest('Propriedades inválidas')

    await this.createUserUseCase.execute({
      apartment: body.apartment,
      name: body.name,
      role: body.role,
    })
  }
}
