export enum HTTP_METHOD {
  GET = 'GET'
}

export enum HTTP_STATUS_CODE {
  OK = 200,
  BAD_REQUEST = 400,
  INTERNAL_SERVER_ERROR = 500
}

export interface HttpRequest<T> {
  url: string
  body?: T
  headers?: Record<string, string>
  params?: Record<string, string | number | undefined | string[]>
}

export type HttpRequestRaw<T> = HttpRequest<T> & {
  method: HTTP_METHOD
}

export interface HttpResponse<T> {
  statusCode: HTTP_STATUS_CODE
  body?: T
}

export interface HttpGetClient<T = any, R = any> {
  get: (props: HttpRequest<T>) => Promise<HttpResponse<R>>
}

export interface HttpClient<T = any, R = any> extends HttpGetClient<T, R> {
  request: (props: HttpRequestRaw<T>) => Promise<HttpResponse<R>>
}
