import React from 'react'
import styled from 'styled-components/macro'


function Navigation({ buttonTexts, onClick }) {
  return (
    <NavStyled>
      {buttonTexts.map((text, index) => (
        <ButtonStyled onClick={() => onClick(index)} key={index}>
          {text}
        </ButtonStyled>
      ))}
    </NavStyled>
  )
}

const NavStyled = styled.nav`
  display: flex;
`

const ButtonStyled = styled.button`
  font-size: 2em;
  flex-grow: 1;
`

export default Navigation
