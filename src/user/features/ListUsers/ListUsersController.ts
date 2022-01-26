import { NotFound } from '@/common/http/HttpError'
import { ListUsersDTO } from '@/user/dtos/ListUsersDTO'

import { ListUsersUseCase } from './ListUsersUseCase'

export class ListUsersController {
  constructor(private readonly listUsersUseCase: ListUsersUseCase) {}

  async handle(): Promise<ListUsersDTO> {
    const output = await this.listUsersUseCase.execute()

    if (output.data.length === 0)
      throw NotFound('Nenhum usuário foi encontrado.')

    return output
  }
}
