import styled from 'styled-components'
import HomeBackground from '../../assets/images/home_background.png'

import { colors } from '../../utils/colors'

export const BackgroundImage = styled.div`
  background: url(${HomeBackground}) no-repeat center;
  background-size: cover;
  height: 100vh;
  width: 100%;
  padding: 40px;
`

export const Header = styled.header`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.img`
  height: 30px;
  width: 70px;
`

export const WrapperLanguage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Language = styled.p`
  color: ${colors.white};
  text-transform: uppercase;
  font-family: calibri;
  font-size: 22px;
  margin-right: 15px;
`

export const WrapperText = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`

export const Title = styled.h1`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 3em;
  color: ${colors.white};
  font-family: mont;
  text-align: center;

  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 1.75em;
  }
`

export const SubTitle = styled.p`
  font-size: 1.375em;
  color: ${colors.white};
  text-align: center;
  margin-top: 48px;

  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 1em;
    margin-top: 30px;
  }
`
