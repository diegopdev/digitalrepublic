import styled from 'styled-components'

import { colors } from '../../utils/colors'

export const BackGround = styled.div`
  background: ${colors.black};
`
export const Wrapper = styled.section`
  margin: 5em 0;
  padding: 1em;
`

export const Description = styled.p`
  font-size: 1em;
  color: ${colors.white};
  margin-top: 48px;
`

export const Steps = styled.p`
  font-size: 1.375em;
  color: ${colors.white};
  margin-top: 48px;
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const Information = styled.p`
  font-size: 1em;
  color: ${colors.white};

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 5px;
    text-align: center;
  }
`

export const Form = styled.form`
  margin: 32px 0 90px 0;
`

export const TextSuccess = styled.p`
  color: ${colors.orange};
  text-align: center;
  font-weight: bold;
  font-size: 2em;
  font-family: mont;
`

export const Animation = styled.div`
  opacity: ${(props) => (props.animation ? 1 : 0)};
  transition: 150ms linear;
`
