export interface ControllerProps {
  body?: any
  params?: any
  query?: any
}

export interface Controller {
  handle(props: ControllerProps): any
}
