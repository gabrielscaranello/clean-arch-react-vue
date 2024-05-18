import { fakerArray } from './faker-array'

export type FakerObject = Record<string, string>

interface FakerObjectProps {
  length?: number
}

export const fakerObject = ({ length }: FakerObjectProps = {}): FakerObject => {
  return fakerArray({ length }).reduce((prev, next) => ({ ...prev, ...next }), {})
}
