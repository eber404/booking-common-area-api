import { ListCommonAreasUseCase } from './ListCommonAreasUseCase'

export class ListCommonAreasController {
  constructor(
    private readonly listCommonAreasUseCase: ListCommonAreasUseCase
  ) {}

  async handle() {
    return this.listCommonAreasUseCase.execute()
  }
}
