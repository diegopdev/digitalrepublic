import React from 'react'
import { Container, CardService, Title } from '../../components'

import { WrapperServices, Wrapper, WrapperTitle } from './styles'

const services = [
  'Desenvolvimento Web',
  'Fábrica de Software',
  'Aplicativos Mobile',
  'Squad Building',
  'UI/UX Design',
  'Marketing Digital'
]

const Services = () => (
  <Container>
    <Wrapper>
      <WrapperTitle>
        <Title>Nossos serviços</Title>
      </WrapperTitle>
      <WrapperServices>
        {services.map((service) => (
          <CardService key={service} title={service} />
        ))}
      </WrapperServices>
    </Wrapper>
  </Container>
)

export default Services
