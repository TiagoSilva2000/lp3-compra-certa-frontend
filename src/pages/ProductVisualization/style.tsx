// @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import { Button, Chip, Card } from '@material-ui/core'
import { CCColors } from '../../constants/colors.constant'
import { Container } from 'react-bootstrap'

export const CustomChip = withStyles(theme => ({
  root: {
    clickable: false,
    height: 40,
    borderRadius: 40 / 4,
    marginBottom: '1em'
  },
  colorPrimary: {
    backgroundColor: CCColors.PRIMARYPURPLE
  },
  colorSecondary: {
    backgroundColor: CCColors.PRIMARYYELLOW
  }
}))(Chip)

export const StyledPage = styled.div`
  /* height: 100vh; */
  /* color: ${CCColors.DARKPURPLE}; */
  width: 100%;
  padding: 7% 10% 7% 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: #333;
`

export const StyledBuyProductWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  color: #333;
`

export const StyledGalleryList = styled.ul`
  max-width: fit-content;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const StyledProductViewerWrapper = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const GalleryWrapper = styled.div`
  /* background-color: #d418d4; */
  padding: 1em;
`

export const SectionWrapper = styled.div`
  /* background-color: #e2dfdf; */
  border-radius: 4em;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
`

export const Gallery = styled.img`
  height: 30em;
  width: 30em;
`

export const Label = styled.div`
  /* background-color: #184920; */
  height: 4em;
  width: 30em;
  padding: 1em;
`

export const ImgGallery = styled.img`
  /* background-color: #3a38a3; */
  height: 5em;
  width: 5em;
  margin: 1em;
  cursor: pointer;
`

export const ProductButtonWrapper = styled(Container)`
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  svg {
    margin-right: 5px;
  }
`
export const ShopButton = withStyles(theme => ({
  root: {
    color: CCColors.MINT,
    width: '100%',
    textDecoration: 'none',
    // marginRight: '0.5em',
    // marginLeft: '0.5em',
    padding: '15px 25px',
    letterSpacing: 1,
    borderRadius: 8,
    fontSize: 18,
    backgroundColor: CCColors.PRIMARYPURPLE,
    '&:hover': {
      backgroundColor: CCColors.DARKYELLOW
    }
  }
}))(Button)

export const ProductChip = withStyles(theme => ({
  root: {
    color: CCColors.DARKPURPLE,
    width: 'fit-content',
    padding: '20px 15px',
    textDecoration: 'bold',
    borderRadius: 40 / 4,
    '& $avatar': {
      color: CCColors.DARKPURPLE
    }
  }
}))(Chip)

export const PriceWrapper = styled(Container)`
  margin: 0;
  padding: 0;
  color: #333;
  b {
    font-weight: bolder;
    font-size: larger;
  }

  h4 {
    color: #aaaaaa;
  }

  h2 {
  }

  h5 {
  }
`
