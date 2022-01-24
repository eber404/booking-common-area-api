import { CreateUserInput } from '@/useCases/CreateUser/CreateUserInput'

import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  async handle(input: CreateUserInput) {
    console.log(this.createUserUseCase)

    await this.createUserUseCase.execute(input)
  }
}
