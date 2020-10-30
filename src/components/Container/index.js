import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, Box } from './styles'

const Container = ({ children }) => (
  <Wrapper>
    <Box>{children}</Box>
  </Wrapper>
)

Container.propTypes = {
  children: PropTypes.node.isRequired
}

export default Container
