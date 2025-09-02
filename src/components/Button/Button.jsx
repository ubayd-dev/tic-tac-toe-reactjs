import React from 'react'
import { ButtonWrapper } from './Button.styled'


export const Button = (props) => {
  return (
      <ButtonWrapper {...props}>{props.children}</ButtonWrapper>
  )
}

export default Button
 