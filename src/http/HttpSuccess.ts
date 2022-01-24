import { HttpResponse, StatusCode } from './Http'

export const Ok = (message = 'Ok'): HttpResponse => ({
  message,
  status: StatusCode.Ok,
})

export const Created = (message = 'Ok'): HttpResponse => ({
  message,
  status: StatusCode.Created,
})
