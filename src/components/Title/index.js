import React from 'react'
import PropTypes from 'prop-types'
import { colors } from '../../utils/colors'
import { Text } from './styles'

const Title = ({ children, color }) => <Text color={color}>{children}</Text>

Title.defaultProps = {
  color: colors.black
}

Title.propTypes = {
  children: PropTypes.elementType.isRequired,
  color: PropTypes.string
}

export default Title
