import React from 'react'
import { Container } from 'inversify'

export const InversifyContext = React.createContext<{
  container: Container | null
}>({
  container: null,
})

type Props = {
  container: Container
  children: React.ReactElement
}

const InversifyContextProvider: React.FC<Props> = ({ container, children }) => {
  return (
    <InversifyContext.Provider value={{ container }}>
      {children}
    </InversifyContext.Provider>
  )
}

export default InversifyContextProvider
