import { makeLoadAddressByZipCodeValidation } from '@/main/factories'
import { validation, ValidationSchema } from '@/main/helpers'

vi.mock('@/main/helpers/validation')

describe('main/factories/validation/load-address-by-zip-code-validation', () => {
  it('should include all validations', () => {
    makeLoadAddressByZipCodeValidation()

    const schema: ValidationSchema = {
      zipCode: { required: true, len: { equal: 8 } }
    }

    expect(validation).toHaveBeenCalledWith(schema)
  })
})
