import React from 'react'
import { Button } from './styles'
import propTypes from 'prop-types'

export const SubmitButton = ({ children, onClick, disabled }) => {
  return <Button disabled={disabled} onClick={onClick}>{children}</Button>
}

SubmitButton.propTypes = {
  onClick: propTypes.func,
  disabled: propTypes.bool,
  children: propTypes.node.isRequired
}
