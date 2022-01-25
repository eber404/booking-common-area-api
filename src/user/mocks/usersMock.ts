import { User } from '@/user/entities/User'
import { UserRole } from '@/user/entities/UserRole'

export const usersMock: User[] = [
  { apartment: 1001, name: 'fulano', role: UserRole.RESIDENT },
  { apartment: 1002, name: 'ciclano', role: UserRole.RESIDENT },
  { apartment: 0, name: 'beltrano', role: UserRole.WORKER },
]
