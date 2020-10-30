import styled from 'styled-components'

import { colors } from '../../utils/colors'

export const Wrapper = styled.div`
  width: 100%;
  border-bottom: 3px solid ${colors.white};
  padding-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const InputCustom = styled.input`
  background: ${colors.black};
  border: none;
  width: 60%;
  color: ${colors.orange};
  font-size: 1.375em;
  font-weight: bold;
`

export const Textarea = styled.textarea`
  background: ${colors.black};
  border: none;
  width: 60%;
  color: ${colors.orange};
  font-size: 1.375em;
  font-weight: bold;
  resize: none;
`

export const ButtonNext = styled.button`
  color: ${colors.orange};
  background: ${colors.black};
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  font-family: mont;
  font-size: 1.375;

  & img {
    margin-left: 10px;
  }
`

export const ButtonPrev = styled(ButtonNext)`
  color: ${colors.mid_grey};
  margin-top: 24px;

  & img {
    margin-right: 10px;
  }
`
