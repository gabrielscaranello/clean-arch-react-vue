import { Address } from '@core'
import { defineStore } from 'pinia'

interface State {
  isLoading: boolean
  isLoaded: boolean
  hasError: boolean
  address?: Address
}

export const useAddressStore = defineStore('address', {
  state: (): State => ({
    isLoading: false,
    isLoaded: false,
    hasError: false,
    address: undefined
  }),

  actions: {
    setAddress(address?: Address) {
      this.address = address
      this.isLoaded = address !== undefined
    },

    setIsLoading(isLoading: boolean) {
      this.isLoading = isLoading
    },

    setHasError(hasError: boolean) {
      this.hasError = hasError

      if (hasError) {
        this.address = undefined
        this.isLoaded = false
      }
    }
  }
})
