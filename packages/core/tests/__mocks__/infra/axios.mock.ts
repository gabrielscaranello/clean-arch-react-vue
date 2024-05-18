import { mockHttpResponse } from '@mocks/data'
import { faker, fakerObject } from '@mocks/faker'
import { MockedObjectDeep } from '@vitest/spy'
import axios, { AxiosStatic } from 'axios'
import { mockClear } from 'vitest-mock-extended'

import { HTTP_METHOD, HttpRequestRaw } from '@/data/contracts'

export const mockAxios = (): MockedObjectDeep<AxiosStatic> => {
  const mockedAxios = vi.mocked(axios, true)

  mockedAxios.request.mockResolvedValue(mockHttpResponse())

  beforeEach(() => {
    mockClear(mockedAxios)
  })

  return mockedAxios
}

export const mockHttpRequest = (): HttpRequestRaw<object> => ({
  url: faker.internet.url(),
  body: fakerObject(),
  method: faker.helpers.enumValue(HTTP_METHOD)
})
