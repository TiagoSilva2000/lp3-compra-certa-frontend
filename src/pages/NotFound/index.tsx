import React from 'react'
import { Styled404Wrapper } from './style'

interface INotFoundProps {
  routesToBeDone: string[]
}

const NotFound = (props: INotFoundProps): JSX.Element => {
  const currPath = window.location.pathname
  const reallyNotFound = props.routesToBeDone.indexOf(currPath) === -1
  const message = reallyNotFound
    ? 'Página não encontrada'
    : 'Página ainda em construção'

  return (
    <Styled404Wrapper>
      {reallyNotFound ? (
        <>
          <h1>{message}</h1>
          <h2>404</h2>
        </>
      ) : (
        <h1>{message}</h1>
      )}
    </Styled404Wrapper>
  )
}
export default NotFound
