import { HTTP_STATUS_CODE } from '~core/data/contracts'
import { faker, fakerObject } from '~mocks/faker'
import { AxiosResponse } from 'axios'

export const mockHttpResponse = (): Partial<AxiosResponse<object>> => ({
  data: fakerObject(),
  status: faker.helpers.enumValue(HTTP_STATUS_CODE)
})
