import styled from 'styled-components'
import { CCColors } from '../../constants/colors.constant'

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${CCColors.DARKPURPLE};
  width: 100%;

  padding: 30px 200px;

  .footer-bottom-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;

    .footer-text-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      ul {
        width: 50%;
        height: 100%;
        list-style-type: none;
        margin-right: 50px;
        li {
          margin-bottom: 10px;
          h3 {
            font-size: 17px;
            color: white;
            margin-bottom: 30px;
          }

          a {
            color: rgb(232, 230, 227);
            text-decoration: none;
            transition: 0.15s;
            :hover {
              color: ${CCColors.DARKYELLOW};
            }
          }
        }
      }
    }
  }
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

export const FooterMailSubscriptionForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  padding: 10px 20px;

  p {
    margin-bottom: 8px;
    width: 100%;
    color: white;
    font-size: 20px;
    width: 100%;
    line-height: 1.15;
  }
  ul {
    justify-self: flex-start;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
    height: 100%;
    margin: 10px;
    width: 100%;
    li {
      margin-bottom: 15px;
      width: 100%;

      input {
        width: 100%;
        height: 32px;
        padding: 8px;
        color: #8c8c8c;
        border: none;
        border-radius: 3px;
      }

      button {
        color: #fff;
        text-transform: uppercase;
        height: 100%;
        width: 120px;
        font-size: 14px;
        min-width: 55px;
        background-color: ${CCColors.PRIMARYPURPLE};
        font-weight: bold;
        border-radius: 2px;
        line-height: 20px;
        padding: 10px 10px;
        border: none;
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
