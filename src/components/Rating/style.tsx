import styled from 'styled-components'
import { CCColors } from '../../constants/colors.constant'

export const RatingWrapper = styled.div`
  p.rating-value {
    font-weight: bold;
    font-size: 16px;
    vertical-align: bottom;
    padding: 0;
    margin: 0;
    margin-left: 5px;

    span {
      font-weight: lighter;
      font-size: 14px;

      color: ${CCColors.INDEXGRAY};
    }
  }
`
