import { BadRequest } from '@/common/http/HttpError'

import { GetUsersUseCase } from './GetUserUseCase'

export class GetUserController {
  constructor(private readonly getUserUseCase: GetUsersUseCase) {}

  async handle(params: any, query: any) {
    const id = params.id

    if (!id) throw BadRequest('Id inválido')

    const user = await this.getUserUseCase.execute({ id })

    return user
  }
}
