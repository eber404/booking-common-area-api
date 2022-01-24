import { InternalServerError } from '@/http/HttpError'
import { Ok } from '@/http/HttpSuccess'

import { Request, Response, NextFunction } from 'express'

export class ExpressAdapter {
  public static post(fn) {
    return async function (req: Request, res: Response, next: NextFunction) {
      try {
        await fn(req.body)

        const { message, status } = Ok()
        return res.status(status).send(message)
      } catch (error) {
        const { message, status } = InternalServerError("Something's wrong")

        console.log(error)

        if (error.status) {
          return res.status(error.status).send(error.message)
        }

        return res.status(status).send(message)
      }
    }
  }
}
