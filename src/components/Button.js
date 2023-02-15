import React from 'react'
import styled from 'styled-components'
import check from '../images/check.svg'
import refuce from '../images/refuce.svg'

export const StyledButton = styled.button`
  width: 77px;
  height: 17px;
  background-color: ${({ variant }) =>
    variant === `refuce` ? `#F11010` : `#10f126`};
  border: 2px solid
    ${({ variant }) => (variant === `refuce` ? `#F11010` : `#10f126`)};
  opacity: 0.4;
  border-radius: 8.5px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const styledP = styled.p`
    color:#10f126;

`

const Button = ({ type = 'succes' }) => {
  return (
    <>
      {type === 'refuce' ? (<>
        <img src={refuce} alt="check" />

        <StyledButton variant="refuce"></StyledButton>
        </>
      ) : (
        <>
          <styledP>succes</styledP>
          <img src={check} alt="check" />
          <StyledButton />
        </>
      )}
    </>
  )
}

export default Button
