import React from 'react'
import { StyledIndex, StyledIndexer } from './style'
interface IIndexerProps {
  indexes: number
  activeIndex: number
}

const Indexer = (props: IIndexerProps): JSX.Element => {
  const { indexes, activeIndex } = props
  const idxsList = []

  for (let i = 0; i < indexes; i++) {
    idxsList.push(<StyledIndex isActive={i === activeIndex} />)
  }

  return <StyledIndexer>{idxsList}</StyledIndexer>
}

export default Indexer
