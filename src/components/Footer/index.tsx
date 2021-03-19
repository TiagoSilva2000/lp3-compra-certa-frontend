import React from 'react'
import {
  FooterCertsWrapper,
  FooterPaymentMethodsWrapper,
  StyledFooter,
  FooterMailSubscriptionFormWrapper,
  FooterSiteIndexWrapper,
  FooterLogoWrapper
} from './style'
import { paymentMethods } from '../../constants/payment-methods.constant'
import { CertList } from '../../constants/cert-list.constant'
import Placeholder from '../Placeholder'

const Footer = (): JSX.Element => (
  <StyledFooter>
    <FooterPaymentMethodsWrapper>
      <h3>Formas de Pagamento</h3>
      <ul>
        {paymentMethods.map(({ iconPath, name }, idx) => (
          <li key={idx}>
            <img src={iconPath} alt={name} />
          </li>
        ))}
      </ul>
    </FooterPaymentMethodsWrapper>
    <FooterCertsWrapper>
      <ul>
        {CertList.map(({ name, iconPath, extLink }, idx) => (
          <li key={idx}>
            <a href={extLink}>
              <img src={iconPath} alt={name} />
            </a>
          </li>
        ))}
      </ul>
    </FooterCertsWrapper>
    <FooterMailSubscriptionFormWrapper>
      <div className='form-centralizer'>
        <p>
          <span>receba ofertas com preços exclusivos</span>
        </p>
        <ul>
          <li>
            <input type='text' name='' id='' placeholder='digite seu nome' />
          </li>
          <li>
            <input
              type='text'
              name=''
              id=''
              placeholder='digite o seu e-mail'
            />
          </li>
          <li>
            <button>ENVIAR</button>
          </li>
        </ul>
      </div>
    </FooterMailSubscriptionFormWrapper>
    <FooterLogoWrapper>
      <Placeholder bgColor='blue' width={600} height={90} />
    </FooterLogoWrapper>
    {/* <FooterSiteIndexWrapper></FooterSiteIndexWrapper> */}
  </StyledFooter>
)

export default Footer
