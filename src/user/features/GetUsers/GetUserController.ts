import { BadRequest } from '@/common/http/HttpError'
import { Controller, ControllerProps } from '@/common/interfaces/Controller'
import { GetUserResponseDTO } from '@/user/dtos/GetUserResponseDTO'

import { GetUsersUseCase } from './GetUserUseCase'

export class GetUserController implements Controller {
  constructor(private readonly getUserUseCase: GetUsersUseCase) {}

  async handle({ params }: ControllerProps): Promise<GetUserResponseDTO> {
    const id = params.id

    if (!id) throw BadRequest('Insira um ID para buscar.')

    const user = await this.getUserUseCase.execute({ id })

    const output = {
      data: user,
    }

    return output
  }
}
