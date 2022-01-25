import { User } from '@/user/entities/User'

export interface CreateUserRepository {
  create(user: User): Promise<void>
}

export interface GetUserRepository {
  get(id: string): Promise<User>
}

export interface ListUsersRepository {
  list(): Promise<User[]>
}

export interface UpdateUserRepository {
  update(id: string, user: User): Promise<void>
}

export interface DeleteUserRepository {
  delete(id: string): Promise<void>
}
