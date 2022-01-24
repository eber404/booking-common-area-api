import { CommonArea } from '@/entities/CommonArea'
import { User } from '@/entities/User'

export interface LocationRepository {
  locate(user: User, area: CommonArea): Promise<void>
  list(): Promise<Location[]>
}
