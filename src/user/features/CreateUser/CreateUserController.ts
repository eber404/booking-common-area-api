import { CreateUserInput } from './CreateUserInput'
import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  async handle(input: CreateUserInput): Promise<void> {
    await this.createUserUseCase.execute(input)
  }
}
