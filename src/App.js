import React, { useState } from 'react'
import Navigation from './Navigation'
import HomePage from './HomePage'
import GlobalStyles from './components/GlobalStyles'
import styled from 'styled-components/macro'
import Settings from './Settings'



export default function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  // eslint-disable-next-line
  const [cards, setCards] = useState([
    {
      title: 'Foo',
      question: 'What?',
      answer: 'That!',
    },
    {
      title: 'Bar',
      question: 'This?',
      answer: 'That!',
    },
  ])

  function createNewCard(obj) {
    return setCards([...cards, obj])
  }

  function renderPage() {
    const pages = {
      0: <HomePage cards={cards} />,
      1: <section>Practice</section>,
      2: <section>Bookmarks</section>,
      3: <Settings sendDataToApp={obj => createNewCard(obj)}/>
    }

    return pages[activeIndex] || <section>404</section>
  }

  return <>
    <GlobalStyles/>
    <AppStyled>
      {renderPage()}
      <Navigation
        buttonTexts={['Home', 'Practice', 'Bookmarks', 'Settings']}
        onClick={setActiveIndex}
      />
    </AppStyled>
  </>
}

const AppStyled = styled.div`
  display: grid;
  grid-template-rows: auto 48px;
  height: 100vh;
  font-family: sans-serif;
`
