import { MenuItem, Select } from '@material-ui/core'
import React from 'react'
import { Card, Container, ListGroup } from 'react-bootstrap'
import Header from '../../components/Header'
import { clients, neighbours, products } from '../../constants/mocked-analysis'
import { AnalysisType } from '../../enum/analysis-types.enum'
import { OrderStatus } from '../../enum/order-status.enum'
import {
  StyledDataVis,
  StyledCard,
  CardsContainer,
  StyledCardList
} from './style'

export default function DataVis(props: unknown): JSX.Element {
  const analysis: string[] = []
  const [analyType, changeAnalyType] = React.useState(AnalysisType.DELIVERTIME)

  for (const analy in AnalysisType) analysis.push(analy)

  return (
    <>
      <Header employeeView />
      <StyledDataVis>
        <CardsContainer>
          <StyledCard className='number-card'>
            <Card.Header>
              <Card.Title>{AnalysisType.DELIVERTIME}</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>{56} horas</Card.Text>
            </Card.Body>
          </StyledCard>
        </CardsContainer>
        <CardsContainer>
          <StyledCard className='number-card'>
            <Card.Header>
              <Card.Title>{AnalysisType.AVGSECTORTIME}</Card.Title>
              <Card.Text>{OrderStatus.PREPARATION}</Card.Text>
            </Card.Header>
            <Card.Body>
              <Card.Text>{56} horas</Card.Text>
            </Card.Body>
          </StyledCard>
          <StyledCard className='number-card'>
            <Card.Header>
              <Card.Title>{AnalysisType.AVGSECTORTIME}</Card.Title>
              <Card.Text>{OrderStatus.CHECKING}</Card.Text>
            </Card.Header>
            <Card.Body>
              <Card.Text>{56} horas</Card.Text>
            </Card.Body>
          </StyledCard>
          <StyledCard className='number-card'>
            <Card.Header>
              <Card.Title>{AnalysisType.AVGSECTORTIME}</Card.Title>
              <Card.Text>{OrderStatus.DELIVERY}</Card.Text>
            </Card.Header>
            <Card.Body>
              <Card.Text>{56} horas</Card.Text>
            </Card.Body>
          </StyledCard>
        </CardsContainer>
        <CardsContainer>
          <StyledCard className='list-card'>
            <Card.Header>
              <Card.Title>{AnalysisType.NEIGHBOURHOOD}</Card.Title>
            </Card.Header>
            <Card.Body>
              <StyledCardList>
                {neighbours.map((neigh, idx) => (
                  <ListGroup.Item key={`neigh${idx}`}>{neigh}</ListGroup.Item>
                ))}
              </StyledCardList>
            </Card.Body>
          </StyledCard>
          <StyledCard className='list-card'>
            <Card.Header>
              <Card.Title>{AnalysisType.CLIENT}</Card.Title>
            </Card.Header>
            <Card.Body>
              <StyledCardList>
                {clients.map((neigh, idx) => (
                  <ListGroup.Item key={`neigh${idx}`}>{neigh}</ListGroup.Item>
                ))}
              </StyledCardList>
            </Card.Body>
          </StyledCard>
          <StyledCard className='list-card'>
            <Card.Header>
              <Card.Title>{AnalysisType.PRODUCT}</Card.Title>
            </Card.Header>
            <Card.Body>
              <StyledCardList>
                {products.map((neigh, idx) => (
                  <ListGroup.Item key={`neigh${idx}`}>{neigh}</ListGroup.Item>
                ))}
              </StyledCardList>
            </Card.Body>
          </StyledCard>
        </CardsContainer>
      </StyledDataVis>
    </>
  )
}
