import { CreateCommonAreaDTO } from '@/commonArea/dtos/CreateCommonAreaDTO'

import { CreateCommonAreaUseCase } from './CreateCommonAreaUseCase'

describe('create common area user case', () => {
  it('should call create method from common area repository', async () => {
    // given
    const commonAreaRepository = {
      create: jest.fn(),
      get: jest.fn(),
      list: jest.fn(),
    }
    const createCommonArea = new CreateCommonAreaUseCase(commonAreaRepository)
    const commonAreaInput: CreateCommonAreaDTO = {
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
