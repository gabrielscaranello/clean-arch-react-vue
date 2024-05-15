import {
  HTTP_METHOD,
  HttpClient,
  HttpRequest,
  HttpRequestRaw,
  HttpResponse
} from '~core/data/contracts'
import axios, { AxiosResponse, isAxiosError } from 'axios'

export class AxiosHttpClient<T = any, R = any> implements HttpClient<T, R> {
  async request(request: HttpRequestRaw<T>): Promise<HttpResponse<R>> {
    const { method, url, body, headers, params } = request
    let httpResponse: AxiosResponse<R>

    try {
      httpResponse = await axios.request({
        url,
        method,
        data: body,
        params,
        headers
      })
    } catch (error: any) {
      const errorFromAxios = isAxiosError(error)
      if (!errorFromAxios) throw error

      httpResponse = error.response as AxiosResponse<R>
    }

    return { statusCode: httpResponse.status, body: httpResponse.data }
  }

  async get(request: HttpRequest<T>): Promise<HttpResponse<R>> {
    return await this.request({ ...request, method: HTTP_METHOD.GET })
  }
}
