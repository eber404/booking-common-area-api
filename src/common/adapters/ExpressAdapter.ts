import * as HttpSuccess from '@/common/http/HttpSuccess'
import * as HttpError from '@/common/http/HttpError'

import { Request, Response } from 'express'

export class ExpressAdapter {
  static post(controller) {
    return async function (req: Request, res: Response) {
      try {
        await controller.handle(req.body)

        const { message, status } = HttpSuccess.Created()
        return res.status(status).send(message)
      } catch (error) {
        if (error.status) {
          return res.status(error.status).send(error.message)
        }

        const { message, status } = HttpError.InternalServerError()

        return res.status(status).send(message)
      }
    }
  }

  static get(controller) {
    return async function (req: Request, res: Response) {
      try {
        const output = await controller.handle(req.params, req.query)

        const { status } = HttpSuccess.Ok()
        return res.status(status).json(output)
      } catch (error) {
        if (error.status) {
          return res.status(error.status).send(error.message)
        }

        const { status, message } = HttpError.InternalServerError()
        return res.status(status).send(message)
      }
    }
  }

  static update(controller) {
    return async function (req: Request, res: Response) {
      try {
        await controller.handle(req.params, req.body)

        const { status, message } = HttpSuccess.Ok()
        return res.status(status).json(message)
      } catch (error) {
        if (error.status) {
          return res.status(error.status).send(error.message)
        }

        const { status, message } = HttpError.InternalServerError()
        return res.status(status).send(message)
      }
    }
  }
}
