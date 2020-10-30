import React from 'react'
import PropTypes from 'prop-types'

import { colors } from '../../utils/colors'

import { Title, Container, Input } from '../../components'

import {
  Wrapper,
  BackGround,
  Description,
  Steps,
  Footer,
  Information,
  Form,
  TextSuccess,
  Animation
} from './styles'

const View = ({ onChange, form, onClickNext, onClickPrev, step }) => (
  <BackGround>
    <Container>
      <Wrapper>
        <Title color={colors.white}>Fale com a gente</Title>

        {step !== 5 && (
          <>
            <Description>
              Por gentileza, preencha seus dados no formulário abaixo:
            </Description>
            <Steps>
              {step}
              /4
            </Steps>
          </>
        )}

        <Form>
          {step === 1 && (
            <Animation animation={step === 1}>
              <Input
                placeholder='Qual o seu nome?'
                name='name'
                value={form.name}
                onChange={onChange}
                onClickNext={onClickNext}
              />
            </Animation>
          )}

          {step === 2 && (
            <Input
              placeholder='Qual seu e-mail?'
              name='email'
              value={form.email}
              onChange={onChange}
              onClickNext={onClickNext}
              onClickPrev={onClickPrev}
            />
          )}

          {step === 3 && (
            <Input
              placeholder='Qual seu telefone?'
              name='phone'
              value={form.phone}
              onChange={onChange}
              onClickNext={onClickNext}
              onClickPrev={onClickPrev}
            />
          )}

          {step === 4 && (
            <Input
              placeholder='Escreva sua mensagem aqui'
              name='message'
              value={form.message}
              onChange={onChange}
              textArea
              onClickNext={onClickNext}
              onClickPrev={onClickPrev}
              labelButtonNext='Enviar'
            />
          )}

          {step === 5 && (
            <TextSuccess>Mensagem enviada com sucesso (:</TextSuccess>
          )}
        </Form>

        <Footer>
          <Information>11 2626-3552</Information>
          <Information>contato@digitalrepublic.com.br</Information>
          <Information>
            Paes Leme, 215 - CJ 1007 | Pinheiros - São Paulo/SP
          </Information>
        </Footer>
      </Wrapper>
    </Container>
  </BackGround>
)

View.propTypes = {
  onChange: PropTypes.func.isRequired,
  form: PropTypes.objectOf(PropTypes.string).isRequired,
  onClickNext: PropTypes.func.isRequired,
  onClickPrev: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired
}

export default View
