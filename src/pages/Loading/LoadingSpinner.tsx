import React from 'react'
import Header from '../../components/Header'
import { StyledPage, Progress } from './style'

export const Spinner = (): JSX.Element => {
  return (
    <>
      <Header />
      <StyledPage>
        <Progress />
      </StyledPage>
    </>
  )
}
