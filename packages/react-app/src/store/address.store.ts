import { Address } from '@core'
import { create } from 'zustand'

interface State {
  isLoading: boolean
  isLoaded: boolean
  hasError: boolean
  address?: Address
}

interface Actions {
  setAddress: (adddress?: State['address']) => void
  setIsLoading: (isLoading: State['isLoading']) => void
  setHasError: (hasError: State['hasError']) => void
}

export type AddressStore = State & Actions

export const useAddressStore = create<AddressStore>((set, get) => ({
  address: undefined,
  hasError: false,
  isLoading: false,
  isLoaded: false,
  setAddress: (address: State['address']) => {
    set({ address, isLoaded: !!address })
    get().setHasError(!address)
  },
  setIsLoading: (isLoading: State['isLoading']) => {
    set({ isLoading })
  },
  setHasError: (hasError: State['hasError']) => {
    set({ hasError })

    if (hasError) {
      set({ address: undefined, isLoaded: false })
    }
  }
}))
