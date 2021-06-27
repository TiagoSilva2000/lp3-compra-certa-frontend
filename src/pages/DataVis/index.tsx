import { MenuItem, Select } from '@material-ui/core'
import React from 'react'
import { Card, Container, ListGroup } from 'react-bootstrap'
import Header from '../../components/Header'
import SectorBarChart from './SectorBarChart'
import DeliveryLineChart from './DeliveryLineChart'
import ClientsRadialChart from './ClientsRadialChart'
import ProductsRadialChart from './ProductsRadialChart'
import NeighboorhoodFunnelChart from './NeighboorhoodFunnelChart'
import { AnalysisType } from '../../enum/analysis-types.enum'
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

  const data = [
    {
      month: 'JAN', preparation: 10, checking: 10, delivery: 10
    },
    {
      month: 'FEV', preparation: 10, checking: 1398, delivery: 10
    },
    {
      month: 'MAR', preparation: 2000, checking: 9800,delivery: 10
    },
    {
      month: 'ABR', preparation: 2000, checking: 9800, delivery: 10
    },
    {
      month: 'MAI', preparation: 2780, checking: 3908, delivery: 10
    },
    {
      month: 'JUN', preparation: 1890, checking: 4800, delivery: 10
    },
    {
      month: 'JUL', preparation: 2390, checking: 3800,  delivery: 10
    },
    {
      month: 'AGO', preparation: 3490, checking: 4300, delivery: 10
    },
    {
      month: 'SET', preparation: 0, checking: 0,delivery: 0
    },
    {
      month: 'OUT', preparation: 0, checking: 0,delivery: 0
    },
    {
      month: 'NOV', preparation: 0, checking: 0,delivery: 0
    },
    {
      month: 'DEZ', preparation: 1230, checking: 0,delivery: 0
    }
  ]


  return (

    <>
      <Header employeeView />
      <StyledDataVis>
        <CardsContainer>
        <StyledCard className='chart-card'>
            <Card.Header>
              <Card.Title>{AnalysisType.DELIVERTIME}</Card.Title>
            </Card.Header>
            <Card.Body>
            <DeliveryLineChart/>
            </Card.Body>
          </StyledCard>
        </CardsContainer>
        <CardsContainer>
        <StyledCard className='chart-card'>
            <Card.Header>
              <Card.Title>{AnalysisType.AVGSECTORTIME}</Card.Title>
            </Card.Header>
            <Card.Body>
            <SectorBarChart {...data}/>
            </Card.Body>
          </StyledCard>
        </CardsContainer>
        <CardsContainer>
        <StyledCard className='chart-card'>
            <Card.Header>
              <Card.Title>{AnalysisType.NEIGHBOURHOOD}</Card.Title>
            </Card.Header>
            <Card.Body>
            <NeighboorhoodFunnelChart/>
            </Card.Body>
          </StyledCard>
        </CardsContainer>
        <CardsContainer>
        <StyledCard className='chart-card'>
            <Card.Header>
              <Card.Title>{AnalysisType.CLIENT}</Card.Title>
            </Card.Header>
            <Card.Body>
            <ClientsRadialChart/>
            </Card.Body>
          </StyledCard>
          <StyledCard className='chart-card'>
            <Card.Header>
              <Card.Title>{AnalysisType.PRODUCT}</Card.Title>
            </Card.Header>
            <Card.Body>
            <ProductsRadialChart/>
            </Card.Body>
          </StyledCard>
        </CardsContainer>
      </StyledDataVis>
    </>
  )
}
