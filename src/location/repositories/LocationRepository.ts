import { CommonArea } from '@/commonArea/entities/CommonArea'
import { User } from '@/user/entities/User'

export interface LocationRepository {
  locate(user: User, area: CommonArea): Promise<void>
  list(): Promise<Location[]>
}
