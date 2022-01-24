import { CreateUserController } from './CreateUserController'
import { CreateUserUseCase } from './CreateUserUseCase'

jest.mock('@/useCases/CreateUser/CreateUserUseCase')

const CreateUserUseCaseMock = CreateUserUseCase as jest.Mock<CreateUserUseCase>

const sutFactory = () => {
  const createUserUseCaseMock =
    new CreateUserUseCaseMock() as jest.Mocked<CreateUserUseCase>
  const sut = new CreateUserController(createUserUseCaseMock)

  jest.spyOn(sut, 'handle')

  return {
    createUserUseCaseMock,
    sut,
  }
}

describe('create user controller', () => {
  it('should call methods handle and execute with given value', async () => {
    // given
    const inputMock = {
      apartment: 1001,
      name: 'fulano',
      role: 'resident',
    }
    const { sut, createUserUseCaseMock } = sutFactory()

    // when
    await sut.handle(inputMock)

    // then
    expect(sut.handle).toBeCalledWith(inputMock)
    expect(createUserUseCaseMock.execute).toBeCalled()
  })

  it('should rejects throw', async () => {
    // given
    const inputMock = {
      apartment: 1001,
      name: 'fulano',
      role: 'resident',
    }
    const { sut, createUserUseCaseMock } = sutFactory()

    // when
    await sut.handle(inputMock)
    jest.spyOn(createUserUseCaseMock, 'execute').mockImplementation(() => {
      throw Error('salve')
    })
    jest.spyOn(sut, 'handle')

    // then
    expect(createUserUseCaseMock.execute).toThrowError()
    expect(sut.handle).rejects.toThrowError()
  })
})
