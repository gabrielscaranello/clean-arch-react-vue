import { mockHttpResponse } from '@mocks/data'
import { mockAxios, mockHttpRequest } from '@mocks/infra'

import { HTTP_METHOD } from '@/data/contracts'
import { AxiosHttpClient } from '@/infra'

vi.mock('axios')

interface SutTypes {
  sut: AxiosHttpClient
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()

  return { sut }
}

describe('infra/axios-http-client', () => {
  const mockedAxios = mockAxios()
  const requestSpy = vi.spyOn(mockedAxios, 'request')

  beforeAll(() => {
    mockedAxios.isAxiosError.mockReturnValue(true)
  })

  describe('request', () => {
    it('should call axios with correct values', async () => {
      const request = mockHttpRequest()
      const { sut } = makeSut()

      await sut.request(request)

      expect(requestSpy).toHaveBeenCalledWith({
        data: request.body,
        url: request.url,
        method: request.method
      })
    })

    it('should return the correct status code and body', () => {
      const { sut } = makeSut()

      const promise = sut.request(mockHttpRequest())

      expect(promise).toEqual(requestSpy.mock.results[0].value)
    })

    it('should return the correct status code and body on failure', () => {
      const { sut } = makeSut()
      requestSpy.mockRejectedValueOnce({
        response: mockHttpResponse()
      })

      const promise = sut.request(mockHttpRequest())

      expect(promise).toEqual(requestSpy.mock.results[0].value)
    })

    it('should throw error if is not AxiosError', () => {
      const { sut } = makeSut()
      requestSpy.mockRejectedValueOnce({
        response: mockHttpResponse()
      })
      mockedAxios.isAxiosError.mockReturnValueOnce(false)

      const promise = sut.request(mockHttpRequest())

      void expect(promise).rejects.toThrow()
    })
  })

  describe('get', () => {
    it('should call axios with correct values', async () => {
      const request = mockHttpRequest()
      const { sut } = makeSut()

      await sut.get(request)

      expect(requestSpy).toHaveBeenCalledWith({
        data: request.body,
        url: request.url,
        method: HTTP_METHOD.GET
      })
    })

    it('should return the correct status code and body', () => {
      const { sut } = makeSut()

      const result = sut.get(mockHttpRequest())

      expect(result).toEqual(requestSpy.mock.results[0].value)
    })
  })
})
