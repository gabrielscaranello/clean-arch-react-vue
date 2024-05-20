import { FC } from 'react'

import { Form, PageTitle, Result } from './components/statefull'

export const App: FC = () => {
  return (
    <div className='container'>
      <PageTitle />
      <Form />
      <Result />
    </div>
  )
}
