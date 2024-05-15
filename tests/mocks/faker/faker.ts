import { base, en, Faker, pt_BR as ptBR } from '@faker-js/faker'

export const faker = new Faker({ locale: [ptBR, en, base] })
