import styled from 'styled-components'

import { colors } from '../../utils/colors'

export const Box = styled.a`
  width: 370px;
  height: 370px;
  margin: 0 1.7rem 1.7rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 24px;
  background: ${colors.white};
  text-decoration: none;
  transition: 0.2s ease-in;
  &:hover {
    background: ${colors.black};
    & h3 {
      color: ${colors.white};
    }
    & p {
      color: ${colors.orange};
    }
  }
`
export const Title = styled.h3`
  font-family: mont;
  transition: 150ms linear;
  font-size: 2em;
  font-weight: bold;
  color: ${colors.black};
  position: relative;
  &:before {
    content: '';
    width: 160px;
    top: -32px;
    height: 8px;
    background: ${colors.orange};
    position: absolute;
  }
  margin-top: 48px;
`

export const KnowMore = styled.p`
  color: ${colors.black};
  font-size: 22px;
  transition: 150ms linear;
  margin-top: 48px;
`
