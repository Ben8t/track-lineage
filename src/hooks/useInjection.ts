import { interfaces } from 'inversify'
import { useContext, useMemo } from 'react'
import { InversifyContext } from '../context/InversifyContext'

const useInjection = <T>(identifier: interfaces.ServiceIdentifier<T>): T => {
  const { container } = useContext(InversifyContext)

  if (!container) {
    throw new Error(
      'Inversify container not found. Make sure you have wrapped your app with the InversifyProvider.',
    )
  }

  return useMemo(() => container.get<T>(identifier), [container, identifier])
}

export default useInjection
