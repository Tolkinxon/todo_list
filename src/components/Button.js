import React from 'react'
import styled from 'styled-components'
import check from '../images/check.svg'
import refuce from '../images/refuce.svg'

export const StyledButton = styled.div`
  width: 77px;
  height: 17px;
  background-color: ${({ variant }) =>
    variant === `refuce` ? `#F11010` : `#10f126`};
  border: 2px solid
    ${({ variant }) => (variant === `refuce` ? `#F11010` : `#10f126`)};
  opacity: 0.2;
  border-radius: 8.5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.5;
  }
`

export const Ptag = styled.p`
  position: relative;
  left: 92px;
  font-size: 12px;
  color: ${({ variant }) => (variant === `refuce` ? `#F11010` : `#10f126`)};
  opacity: 1;
`

const Button = ({ type = 'succes' }) => {
  return (
    <>
      {type === 'refuce' ? (
        <>
          <img src={refuce} alt="check" className="img-tag" />
          <Ptag variant="refuce">refuce</Ptag>
          <StyledButton variant="refuce" />
        </>
      ) : (
        <>
          <img src={check} alt="check" className="img-tag" />
          <Ptag>succes</Ptag>
          <StyledButton />
        </>
      )}
    </>
  )
}

export default Button
