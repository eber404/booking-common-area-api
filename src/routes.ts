import { Router } from 'express'

import { ExpressAdapter } from '@/common/adapters/ExpressAdapter'

import { createUserController } from '@/user/features/CreateUser'
import { listUsersController } from '@/user/features/ListUsers'
import { getUserController } from '@/user/features/GetUsers'
import { updateUserController } from '@/user/features/UpdateUser'

import { createCommonAreaController } from '@/commonArea/features/CreateCommonArea'
import { listCommonAreasController } from '@/commonArea/features/ListCommonAreas'

import { createBookingController } from '@/booking/features/CreateBooking'
import { listBookingsController } from '@/booking/features/ListBookings'

const routes = Router()

// users routes
routes.post('/api/user', ExpressAdapter.post(createUserController))
routes.get('/api/user', ExpressAdapter.get(listUsersController))
routes.get('/api/user/:id', ExpressAdapter.get(getUserController))
routes.put('/api/user/:id', ExpressAdapter.update(updateUserController))

// common area routes
routes.post('/api/common-area', ExpressAdapter.post(createCommonAreaController))
routes.get('/api/common-area', ExpressAdapter.get(listCommonAreasController))

// booking routes
routes.post('/api/booking', ExpressAdapter.post(createBookingController))
routes.get('/api/booking', ExpressAdapter.get(listBookingsController))

export { routes }
