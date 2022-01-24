import { User } from '@/entities/User'

export interface CreateUserRepository {
  create(user: User): Promise<void>
}

export interface GetUserRepository {
  get(id: string): Promise<User>
}

export interface ListUserRepository {
  list(): Promise<User[]>
}
