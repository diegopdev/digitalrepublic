import React from 'react'
import PropTypes from 'prop-types'

import { Text } from './styles'

const Title = ({ children }) => <Text>{children}</Text>

Title.propTypes = {
  children: PropTypes.elementType.isRequired
}

export default Title
