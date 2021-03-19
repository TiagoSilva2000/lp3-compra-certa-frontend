import styled from 'styled-components'
import { CCColors } from '../../constants/colors.constant'

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${CCColors.DARKPURPLE};
  width: 100%;

  padding: 30px;
`
export const FooterPaymentMethodsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid ${CCColors.INDEXGRAY};

  h3 {
    color: white;
    margin-bottom: 10px;
    font-size: 18px;
  }
  ul {
    min-width: 40%;
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content: space-evenly;
    box-sizing: border-box;
    list-style-type: none;
    /* background-color: blue; */

    li {
      img {
        width: 40px;
        height: auto;
      }
    }
  }
`

export const FooterCertsWrapper = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  ul {
    min-width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    li {
      margin-right: 25px;
    }
  }
`

export const FooterMailSubscriptionFormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15px;

  .form-centralizer {
    align-self: center;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  p {
    margin-left: 10px;
    /* align-self: flex-start; */
    /* width: 100%; */
    margin-bottom: 8px;
    span {
      color: white;
      font-size: 20px;
    }
  }
  ul {
    justify-self: flex-start;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
    list-style-type: none;
    margin: 10px;
    li {
      margin-right: 12px;

      input {
        width: 270px;
        height: 32px;
        padding: 8px;
        color: #8c8c8c;
        border: none;
        border-radius: 3px;
      }

      button {
        color: #fff;
        height: 100%;
        font-size: 14px;
        min-width: 55px;
        background-color: ${CCColors.PRIMARYPURPLE};
        font-weight: bold;
        border-radius: 5px;
        line-height: 20px;
        padding: 5px 12px;
        border: none;
        /* box-sizing: border-box; */
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
      }
    }
  }
`

export const FooterSiteIndexWrapper = styled.div``

export const FooterLogoWrapper = styled.div`
  margin-top: 50px;
  padding: 10px 20px;
  justify-self: center;
  width: 100%;

  display: flex;
  justify-content: center;
`
