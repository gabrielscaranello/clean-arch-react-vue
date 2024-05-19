import { Address, LoadAddressByZipCodeParams } from '@core/domain'

export interface Controller<T = any, R = any> {
  handle: (params: T) => Promise<R>
}

export interface LoadAddressByZipCodeControllerParams extends LoadAddressByZipCodeParams {}

export interface LoadAddressByZipCodeController
  extends Controller<LoadAddressByZipCodeControllerParams, Address> {}
