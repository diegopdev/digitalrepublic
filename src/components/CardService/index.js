import React from 'react'
import PropTypes from 'prop-types'
import { Box, KnowMore, Title } from './styles'

const CardService = ({ title }) => (
  <Box href=''>
    <Title>{title}</Title>
    <KnowMore>saiba mais</KnowMore>
  </Box>
)

CardService.propTypes = {
  title: PropTypes.string.isRequired
}

export default CardService
