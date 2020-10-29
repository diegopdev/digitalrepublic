import styled from 'styled-components'

import { colors } from '../../utils/colors'

export const Box = styled.a`
  width: 370px;
  height: 370px;
  margin-bottom: 1.7rem;
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

  @media (max-width: 1025px) {
    width: 350px;
    margin 1.7em;
  }
`
export const Title = styled.h3`
  font-family: mont;
  transition: 150ms linear;
  font-size: 2em;
  font-weight: bold;
  color: ${colors.black};
  position: relative;
  max-width: 295px;
  &:before {
    content: '';
    width: 160px;
    top: -32px;
    height: 8px;
    background: ${colors.orange};
    position: absolute;
  }
  margin-top: 48px;

  @media (max-width: 768px) {
    font-size: 1.8em;
    max-width: 150px;
  }
`

export const KnowMore = styled.p`
  color: ${colors.black};
  font-size: 1.375em;
  transition: 150ms linear;
  margin-top: 48px;
`
