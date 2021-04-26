import { Card, Container, ListGroup } from 'react-bootstrap'
import styled from 'styled-components'

export const StyledDataVis = styled.div`
  width: 100%;
`

export const CardsContainer = styled(Container)`
  padding: 5% 15% 1% 15%;
  display: flex;
  justify-content: space-between;
`

export const StyledCard = styled(Card)`
  margin-right: 10px;

  &.number-card {
    width: 180px;
  }

  &.list-card {
    width: 250px;
  }
`

export const StyledCardList = styled(ListGroup)``
