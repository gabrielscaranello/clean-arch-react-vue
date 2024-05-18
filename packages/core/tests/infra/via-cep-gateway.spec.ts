import { HttpGetClientStub } from '@mocks/data'
import { faker } from '@mocks/faker'
import { mockViaCepLoadAddressByZipCodeResult } from '@mocks/infra'

import { HTTP_STATUS_CODE, HttpGetClient } from '@/data/contracts'
import { LoadAddressByZipCodeParams } from '@/domain'
import { ViaCepGateway } from '@/infra/gateways'

interface SutTypes {
  sut: ViaCepGateway
  httpClient: HttpGetClient
  baseURL: string
}

const makeSut = (): SutTypes => {
  const httpClient = new HttpGetClientStub()
  const baseURL = faker.internet.url()
  const sut = new ViaCepGateway(httpClient, baseURL)

  return { sut, httpClient, baseURL }
}

describe('infra/via-cep-gateway', () => {
  describe('load', () => {
    const params: LoadAddressByZipCodeParams = {
      zipCode: faker.location.zipCode()
    }

    it('should call HttpClient with correct values', async () => {
      const { sut, httpClient, baseURL } = makeSut()
      vi.spyOn(httpClient, 'get')

      await sut.load(params)

      expect(httpClient.get).toHaveBeenCalledWith({
        url: `${baseURL}/ws/${params.zipCode}/json/`
      })
    })

    it('should throw error if HttpClient returns 400', async () => {
      const { sut, httpClient } = makeSut()
      vi.spyOn(httpClient, 'get').mockResolvedValueOnce({
        statusCode: HTTP_STATUS_CODE.BAD_REQUEST
      })

      const promise = sut.load(params)

      await expect(promise).rejects.toThrow()
    })

    it('should throw error if HttpClient returns 200 but with no body', async () => {
      const { sut, httpClient } = makeSut()
      vi.spyOn(httpClient, 'get').mockResolvedValueOnce({
        statusCode: HTTP_STATUS_CODE.OK
      })

      const promise = sut.load(params)

      await expect(promise).rejects.toThrow()
    })

    it('should return address on success', async () => {
      const mockedResult = mockViaCepLoadAddressByZipCodeResult()
      const { sut, httpClient } = makeSut()
      vi.spyOn(httpClient, 'get').mockResolvedValueOnce({
        statusCode: HTTP_STATUS_CODE.OK,
        body: mockedResult
      })

      const address = await sut.load(params)

      expect(address).toEqual({
        city: mockedResult.localidade,
        complement: mockedResult.complemento,
        neighborhood: mockedResult.bairro,
        state: mockedResult.uf,
        street: mockedResult.logradouro,
        zipCode: mockedResult.cep
      })
    })
  })
})
