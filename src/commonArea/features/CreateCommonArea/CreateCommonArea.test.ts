import { CreateCommonArea } from './CreateCommonArea'
import { CreateCommonAreaInput } from './CreateCommonAreaInput'

describe('create common area user case', () => {
  it('should call create method from common area repository', async () => {
    // given
    const commonAreaRepository = {
      create: jest.fn(),
      get: jest.fn(),
      list: jest.fn(),
    }
    const createCommonArea = new CreateCommonArea(commonAreaRepository)
    const commonAreaInput: CreateCommonAreaInput = {
      floor: 4,
      status: 'free',
      title: 'Salão de Festas',
    }

    // when
    await createCommonArea.execute(commonAreaInput)

    // then
    expect(commonAreaRepository.create).toBeCalled()
  })
})
