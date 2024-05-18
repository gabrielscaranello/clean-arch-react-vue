import { fakerObject } from '@mocks/faker'

import { HTTP_STATUS_CODE, HttpGetClient, HttpResponse } from '@/data/contracts'

export class HttpGetClientStub implements HttpGetClient {
  async get<R = any>(): Promise<HttpResponse<R>> {
    const response: HttpResponse<R> = {
      statusCode: HTTP_STATUS_CODE.OK,
      body: fakerObject({ length: 1 }) as R
    }
    return await Promise.resolve(response)
  }
}
