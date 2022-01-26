import { Request, Response } from 'express'

import * as HttpSuccess from '@/common/http/HttpSuccess'
import * as HttpError from '@/common/http/HttpError'
import { Controller } from '@/common/interfaces/Controller'

export class ExpressAdapter {
  static post(controller: Controller) {
    return async function (req: Request, res: Response) {
      try {
        await controller.handle({
          body: req.body,
          params: req.params,
          query: req.query,
        })

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

  static get(controller: Controller) {
    return async function (req: Request, res: Response) {
      try {
        const output = await controller.handle({
          body: req.body,
          params: req.params,
          query: req.query,
        })

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

  static update(controller: Controller) {
    return async function (req: Request, res: Response) {
      try {
        await controller.handle({
          body: req.body,
          params: req.params,
          query: req.query,
        })

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
