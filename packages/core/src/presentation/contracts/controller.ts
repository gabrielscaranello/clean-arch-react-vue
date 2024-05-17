export interface Controller<T = any, R = any> {
  handle: (params: T) => Promise<R>
}
