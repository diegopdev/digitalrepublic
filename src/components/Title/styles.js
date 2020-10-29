import styled from 'styled-components'

import { colors } from '../../utils/colors'

export const Text = styled.h3`
  font-family: mont;
  transition: 150ms linear;
  font-size: 3em;
  text-transform: uppercase;
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
`
