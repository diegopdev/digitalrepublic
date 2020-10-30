import React from 'react'
import PropTypes from 'prop-types'

import ArrowLeft from '../../assets/icons/arrow_left.svg'
import ArrowRight from '../../assets/icons/arrow_ right.svg'

import {
  Wrapper,
  InputCustom,
  Textarea,
  ButtonNext,
  ButtonPrev
} from './styles'

const Input = ({
  placeholder,
  textArea,
  onChange,
  value,
  name,
  type,
  onClickNext,
  onClickPrev,
  labelButtonNext,
  labelButtonPrev
}) => (
  <>
    <Wrapper>
      {!textArea && (
        <InputCustom
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          type={type}
          value={value}
        />
      )}
      {textArea && (
        <Textarea
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          value={value}
        />
      )}
      <ButtonNext onClick={() => onClickNext()}>
        {labelButtonNext}
        <img src={ArrowRight} alt={labelButtonNext} />
      </ButtonNext>
    </Wrapper>
    {onClickPrev && (
      <ButtonPrev onClick={() => onClickPrev()}>
        <img src={ArrowLeft} alt={labelButtonPrev} />
        {labelButtonPrev}
      </ButtonPrev>
    )}
  </>
)

Input.defaultProps = {
  placeholder: '',
  textArea: false,
  name: null,
  type: 'text',
  labelButtonNext: 'Proximo',
  labelButtonPrev: 'Voltar'
}

Input.propTypes = {
  placeholder: PropTypes.string,
  textArea: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  onClickNext: PropTypes.func.isRequired,
  onClickPrev: PropTypes.func.isRequired,
  labelButtonNext: PropTypes.string,
  labelButtonPrev: PropTypes.string
}

export default Input
