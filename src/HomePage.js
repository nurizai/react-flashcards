import React from 'react'
import Card from './Card'
import styled from 'styled-components/macro'

function HomePage({ cards }) {
  return (
    <PageStyled>
      <h1>Homepage</h1>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          question={card.question}
          answer={card.answer}
        />
      ))}
    </PageStyled>
  )
}

const PageStyled = styled.section`
  padding: 20px;
  display: grid;
  align-content: flex-start;
  gap: 20px;
`

export default HomePage
