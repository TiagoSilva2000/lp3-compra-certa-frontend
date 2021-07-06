import React from 'react'
import {
  FooterCertsWrapper,
  FooterPaymentMethodsWrapper,
  StyledFooter,
  FooterMailSubscriptionForm,
  FooterSiteIndexWrapper,
  FooterLogoWrapper
} from './style'
import { paymentMethods } from '../../mocks/payment-methods.constant'
import { CertList } from '../../mocks/cert-list.constant'
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
    <div className='footer-bottom-wrapper'>
      {/* <FooterLogoWrapper>
        <Placeholder bgColor='blue' width={300} height={45} />
      </FooterLogoWrapper> */}
      <div className='footer-text-wrapper'>
        <ul>
          <li>
            <h3>Institucional</h3>
          </li>
          <li>
            <a href=''>Sobre</a>
          </li>
          <li>
            <a href=''>Política de Privacidade</a>
          </li>
          <li>
            <a href=''>Termos e Condições</a>
          </li>
        </ul>
        <ul>
          <li>
            <h3>Ajuda</h3>
          </li>
          <li>
            <a href=''>Fale Conosco</a>
          </li>
          <li>
            <a href=''>Trocas e Devoluções</a>
          </li>
          <li>
            <a href=''>Segurança</a>
          </li>
        </ul>
      </div>
      <FooterMailSubscriptionForm
        name='newsletter-form'
        method='POST'
        action=''
      >
        <p>receba ofertas com preços exclusivos</p>
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
            <button type='submit'>Cadastrar</button>
          </li>
        </ul>
      </FooterMailSubscriptionForm>
    </div>
  </StyledFooter>
)

/* <FooterCertsWrapper>
      <ul>
        {CertList.map(({ name, iconPath, extLink }, idx) => (
          <li key={idx}>
            <a href={extLink}>
              <img src={iconPath} alt={name} />
            </a>
          </li>
        ))}
      </ul>
</FooterCertsWrapper> */

export default Footer
