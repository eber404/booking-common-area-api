import express from 'express'

import { ExpressAdapter } from '@/controllers/adapters/ExpressAdapter'
import { createUserController } from './useCases/CreateUser'

const app = express()

app.use(express.json())

app.post('/api/user', ExpressAdapter.post(createUserController.handle))

export { app as server }
