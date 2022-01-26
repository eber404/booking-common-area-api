import { UserDTO } from '@/user/dtos/UserDTO'

export interface CreateUserRepository {
  create(user: UserDTO): Promise<void>
}

export interface GetUserRepository {
  get(id: string): Promise<UserDTO>
}

export interface ListUsersRepository {
  list(): Promise<UserDTO[]>
}

export interface UpdateUserRepository {
  update(user: UserDTO): Promise<void>
}

export interface DeleteUserRepository {
  delete(id: string): Promise<void>
}
