import {
  CreateUserRepository,
  ListUsersRepository,
} from '@/user/repositories/UserRepository'
import { User } from '@/user/entities/User'
import { usersMock } from '@/user/mocks/usersMock'

import { CreateUserUseCase } from './CreateUserUseCase'

class CreateUserRepositoryStub implements CreateUserRepository {
  async create(user: User): Promise<void> {
    return await Promise.resolve()
  }
}

class ListUsersRepositoryStub implements ListUsersRepository {
  async list(): Promise<User[]> {
    return await Promise.resolve(usersMock)
  }
}

const sutFactory = () => {
  const createUserRepository = new CreateUserRepositoryStub()
  const listUsersRepository = new ListUsersRepositoryStub()
  const sut = new CreateUserUseCase(createUserRepository, listUsersRepository)

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
      apartment: 1004,
      name: 'james',
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
