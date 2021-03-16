import styled from 'styled-components'
import { CCColors } from '../../constants/colors.constant'

export const StyledBanner = styled.div`
  width: 100%;
  background-color: ${CCColors.DARKPURPLE};
  padding-bottom: 5px;

  div#bannerWrapper {
    position: relative;

    span {
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: auto;
      margin-top: -22px;
      padding: 16px;
      color: white;
      font-weight: bold;
      font-size: 40px;
      transition: 0.6s ease;
      border-radius: 0 3px 3px 0;
      user-select: none;

      :hover {
        color: rgba(0, 0, 0, 0.8);
      }
    }
    span.right {
      right: 0;
      border-radius: 3px 0 0 3px;
    }
  }
`

export const StyledBannerUnity = styled.div`
  position: relative;
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
  img {
    width: 100%;
    height: auto;
  }
`

export const StyledIndexerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 40%;
  padding-right: 40%;

  width: 100%;
`
