import { HttpResponse, StatusCode } from './Http'

export const BadRequest = (message = 'Bad request'): HttpResponse => ({
  message,
  status: StatusCode.BadRequest,
})

export const Unauthorized = (message = 'Unauthorized'): HttpResponse => ({
  message,
  status: StatusCode.Unauthorized,
})

export const NotFound = (message = 'Not found'): HttpResponse => ({
  message,
  status: StatusCode.NotFound,
})

export const RequestTimeout = (message = 'Request timeout'): HttpResponse => ({
  message,
  status: StatusCode.RequestTimeout,
})

export const InternalServerError = (
  message = 'Internavel server error'
): HttpResponse => ({
  message,
  status: StatusCode.InternalServerError,
})
