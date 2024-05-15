import { faker } from './faker'
import { FakerObject } from './faker-object'

interface FakerArrayProps {
  length?: number
}

export const fakerArray = ({ length }: FakerArrayProps = {}): FakerObject[] => {
  return Array.from(Array(length ?? faker.number.int({ min: 1, max: 5 })), () => ({
    [faker.string.alpha({ casing: 'lower', length: 3 })]: faker.string.nanoid({ min: 5, max: 10 })
  }))
}
