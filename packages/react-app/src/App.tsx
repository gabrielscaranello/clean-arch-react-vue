import { FC } from 'react'

import { Form, PageTitle } from './components/statefull'

export const App: FC = () => {
  return (
    <div className='container'>
      <PageTitle />
      <Form />
    </div>
  )
}
