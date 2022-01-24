import { BadRequest } from '@/common/http/HttpError'
import { UpdateUserUseCase } from './UpdateUserUseCase'

export class UpdateUserController {
  constructor(private readonly updateUserUseCase: UpdateUserUseCase) {}

  async handle(params: any, body: any) {
    if (!params.id) throw BadRequest('Id inválido')
    if (!body) throw BadRequest('Dados inválidos.')

    const id = params.id
    const user = body

    await this.updateUserUseCase.execute({ id, ...user })
  }
}
