type Store<T> = Record<string, T>

interface FakerUniqueOptions<T> {
  maxTime?: number
  maxRetries?: number
  exclude?: T[]
  readonly store?: Store<T>
}

type FakerUniqueReturn<T, U extends readonly unknown[] = readonly unknown[]> = (
  ...args: [...U]
) => T

const allowedTimeout = (startTime: number, maxTime: number, retries: number): boolean => {
  if (Date.now() - startTime > maxTime) {
    throw new Error(`memoizeUnique: maxTime of ${maxTime}ms exceeded after ${retries} retries`)
  }

  return true
}

const allowedRetry = (maxRetries: number, retries: number): boolean => {
  if (retries > maxRetries) {
    throw new Error(`memoizeUnique: maxRetries of ${maxRetries} exceeded`)
  }

  return true
}

const allowedContinue = (
  maxRetries: number,
  retries: number,
  startTime: number,
  maxTime: number
): boolean => {
  return allowedRetry(maxRetries, retries) && allowedTimeout(startTime, maxTime, retries)
}

export const fakerUnique = <T, U extends readonly unknown[] = readonly unknown[]>(
  callback: FakerUniqueReturn<T, U>,
  options: FakerUniqueOptions<T> = {}
): FakerUniqueReturn<T, U> => {
  const { maxTime = 5000, maxRetries = 50, store = {} } = options
  const { exclude = [] } = options

  return (...args) => {
    const startTime = Date.now()
    let retries = 0
    let result: T

    do {
      retries++
      // eslint-disable-next-line n/no-callback-literal
      result = callback(...args)

      if (!exclude.includes(result)) {
        const key = JSON.stringify(args) + JSON.stringify(result)
        if (!Object.prototype.hasOwnProperty.call(store, key)) {
          store[key] = result
          break
        }
      }
    } while (allowedContinue(maxRetries, retries, startTime, maxTime))

    return result
  }
}
