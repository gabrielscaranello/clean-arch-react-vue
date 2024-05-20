import { Callout, List, ListItem, Progress } from '@react-app/components/stateless'
import { useAddressStore } from '@react-app/store'
import { FC } from 'react'

export const Result: FC = () => {
  const store = useAddressStore()

  return (
    <div className='result__container'>
      {!store.hasError && (
        <>
          <h2 className='result__title'>Resultado da busca</h2>
          {store.isLoading && <Progress />}
          {store.isLoaded && !store.isLoading && (
            <>
              <List>
                <ListItem title='Cidade' content={store.address!.city} />
                <ListItem title='UF' content={store.address!.state} />
                <ListItem title='Logradouro' content={store.address?.street || '-'} />
                <ListItem title='Bairro' content={store.address?.neighborhood || '-'} />
                <ListItem title='Complemento' content={store.address?.complement || '-'} />
              </List>
            </>
          )}
          {!store.isLoading && !store.isLoaded && (
            <Callout content='Faça uma busca para ver o resultado.' type='info' />
          )}
        </>
      )}
      {store.hasError && (
        <Callout
          title='Algo deu errado.'
          content='Aconteceu um erro ao buscar o endereço. Tente novamente.'
          type='error'
        />
      )}
    </div>
  )
}
