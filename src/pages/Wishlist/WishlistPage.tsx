import React from 'react'
import { Link } from 'react-router-dom'
import { Favorite, DeleteForever } from '@material-ui/icons'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { AccountList } from '../../constants/category-list.constant'
import { Img1, Img2, Img3 } from '../ShopHistory/ProductImg'
import {
  CategoryWrapper,
  SectionWrapper,
  StyledPage,
  CustomChip,
  StyledCard,
  StyledProductImg,
  StyledContentCard
} from './style'

import {
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Typography
} from '@material-ui/core'

type MyState = {
  value: string
}

class Accounts extends React.Component<{ props: any }, MyState> {
  render(): JSX.Element {
    return (
      <>
        <Header />
        <StyledPage>
          <CategoryWrapper>
            <h3>Minha conta:</h3>
            <ul>
              {Object.keys(AccountList).map((item, idx) => (
                <li key={idx}>
                  <Link to={`/${AccountList[item]}`}>
                    <a> {item}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </CategoryWrapper>
          <SectionWrapper>
            <CustomChip
              icon={<Favorite />}
              color='primary'
              label='Lista de desejos'
            />
            <StyledCard>
              <CardActionArea>
                <CardContent>
                  <StyledContentCard>
                    <StyledProductImg src={Img1} />
                    <h4>
                      For XiaoMi redmi 4x redmi 4 x Case Mermaid Newest Flamingo
                      Cute Case soft silicone For Redmi 4x 5 Coque capa+Gfit
                    </h4>
                  </StyledContentCard>
                  <Typography variant='h6' component='h6'>
                    R$ 29,00
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='secondary'>
                  <DeleteForever /> Remover
                </Button>
              </CardActions>
            </StyledCard>
            <StyledCard>
              <CardActionArea>
                <CardContent>
                  <StyledContentCard>
                    <StyledProductImg src={Img3} />
                    <h4>
                      For XiaoMi redmi 4x redmi 4 x Case Mermaid Newest Flamingo
                      Cute Case soft silicone For Redmi 4x 5 Coque capa+Gfit
                    </h4>
                  </StyledContentCard>
                  <Typography variant='h6' component='h6'>
                    R$ 29,00
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='secondary'>
                  <DeleteForever /> Remover
                </Button>
              </CardActions>
            </StyledCard>
            <StyledCard>
              <CardActionArea>
                <CardContent>
                  <StyledContentCard>
                    <StyledProductImg src={Img2} />
                    <h4>
                      For XiaoMi redmi 4x redmi 4 x Case Mermaid Newest Flamingo
                      Cute Case soft silicone For Redmi 4x 5 Coque capa+Gfit
                    </h4>
                  </StyledContentCard>
                  <Typography variant='h6' component='h6'>
                    R$ 29,00
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='secondary'>
                  <DeleteForever /> Remover
                </Button>
              </CardActions>
            </StyledCard>
          </SectionWrapper>
        </StyledPage>
        <Footer />
      </>
    )
  }
}
export default Accounts
