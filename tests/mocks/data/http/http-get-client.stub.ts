import { HTTP_STATUS_CODE, HttpGetClient, HttpResponse } from '~core/data/contracts'
import { fakerObject } from '~mocks/faker'

export class HttpGetClientStub implements HttpGetClient {
  async get<R = any>(): Promise<HttpResponse<R>> {
    const response: HttpResponse<R> = {
      statusCode: HTTP_STATUS_CODE.OK,
      body: fakerObject({ length: 1 }) as R
    }
    return await Promise.resolve(response)
  }
}
