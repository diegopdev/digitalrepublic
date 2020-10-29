import React from 'react'
import { Container } from '../../components'

import Logotipo from '../../assets/images/logo.png'
import ArrowDownSVG from '../../assets/icons/arrow_down.svg'

import {
  BackgroundImage,
  Header,
  Logo,
  Language,
  WrapperText,
  Title,
  SubTitle,
  WrapperLanguage
} from './styles'

const Home = () => (
  <BackgroundImage>
    <Container>
      <Header>
        <Logo src={Logotipo} />
        <WrapperLanguage>
          <Language>pt</Language>
          <img src={ArrowDownSVG} alt='teste' />
        </WrapperLanguage>
      </Header>
      <WrapperText>
        <Title>Desenvolvimento Web_</Title>
        <SubTitle>Somos tecnologia para você ser o que quiser.</SubTitle>
      </WrapperText>
    </Container>
  </BackgroundImage>
)

export default Home
