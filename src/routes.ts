import { Router } from 'express'

import { ExpressAdapter } from '@/common/adapters/ExpressAdapter'
import { createUserController } from '@/user/features/CreateUser'
import { listUsersController } from '@/user/features/ListUsers'
import { getUserController } from '@/user/features/GetUsers'
import { updateUserController } from '@/user/features/UpdateUser'

const routes = Router()

routes.post('/api/user', ExpressAdapter.post(createUserController))
routes.get('/api/user', ExpressAdapter.get(listUsersController))
routes.get('/api/user/:id', ExpressAdapter.get(getUserController))
routes.put('/api/user/:id', ExpressAdapter.update(updateUserController))

export { routes }
