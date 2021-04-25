// @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import { Button, Chip, Card } from '@material-ui/core'
import { CCColors } from '../../constants/colors.constant'

export const CustomChip = withStyles(theme => ({
  root: {
    clickable: false,
    height: 40,
    borderRadius: 40 / 2,
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
  height: 100vh;
  width: 100%;
  padding: 7% 10% 7% 10%;
  display: flex;
  justify-content: space-around;
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
  color: ${CCColors.DARKPURPLE};
  align-items: center;
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
  color: ${CCColors.DARKPURPLE};
`

export const ImgGallery = styled.img`
  /* background-color: #3a38a3; */
  height: 5em;
  width: 5em;
  margin: 1em;
  cursor: pointer;
`

export const ShopButton = withStyles(theme => ({
  root: {
    color: CCColors.MINT,
    textDecoration: 'none',
    marginRight: '0.5em',
    marginLeft: '0.5em',
    backgroundColor: CCColors.PRIMARYPURPLE,
    '&:hover': {
      backgroundColor: CCColors.DARKYELLOW
    }
  }
}))(Button)

export const ProductChip = withStyles(theme => ({
  root: {
    color: CCColors.DARKPURPLE,
    textDecoration: 'bold',
    '& $avatar': {
      color: CCColors.DARKPURPLE
    }
  }
}))(Chip)
