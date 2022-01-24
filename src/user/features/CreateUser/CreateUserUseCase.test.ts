import { CreateUserRepository } from '@/user/repositories/UserRepository'
import { User } from '@/user/entities/User'

import { CreateUserUseCase } from './CreateUserUseCase'

class CreateUserRepositoryStub implements CreateUserRepository {
  async create(user: User): Promise<void> {
    return await Promise.resolve()
  }
}

const sutFactory = () => {
  const createUserRepository = new CreateUserRepositoryStub()
  const sut = new CreateUserUseCase(createUserRepository)

  jest.spyOn(createUserRepository, 'create')
  jest.spyOn(sut, 'execute')

  return {
    createUserRepository,
    sut,
  }
}

describe('create user use case', () => {
  it('should call methods execute and create', async () => {
    // given
    const inputMock = {
      apartment: 1001,
      name: 'fulano',
      role: 'resident',
    }
    const { sut, createUserRepository } = sutFactory()

    // when
    await sut.execute(inputMock)

    // then
    expect(sut.execute).toBeCalledWith(inputMock)
    expect(createUserRepository.create).toBeCalled()
  })
})
