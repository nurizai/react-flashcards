import React, { useState } from 'react'
import styled from 'styled-components/macro'

function Settings({sendDataToApp}) {

  const [newCard, setNewCard] = useState({
    title:'',
    question: '',
    answer: ''
  })

  function changeNewCard(event){
    setNewCard({...newCard, [event.target.name]: event.target.value})
  }

  function submitNewCard(event) {
    event.preventDefault();
    sendDataToApp(newCard)
  }

  return (
    <SettingsStyled>
      <form onSubmit={event => submitNewCard(event)}>
        <input value={newCard.title} onChange={changeNewCard} text="text" name="title" placeholder="title" />
        <input value={newCard.question} onChange={changeNewCard} text="text" name="question"placeholder="question" />
        <textarea value={newCard.answer} onChange={changeNewCard} rows="10" name="answer"placeholder="answer" />
        <button>Send</button>
      </form>
    </SettingsStyled>
    )
}

const SettingsStyled = styled.section`

  form {
  padding: 20px;
  display: grid;
  align-content: flex-start;
  gap: 20px;
  }

input {
  border-radius: 10px;
  border: none;
}
  input, textarea {
    padding: 10px;
    font-family: inherit;
    font-size: 14px;
  }

  button {
    width: 100px;
    padding: 10px;
    font-size: 14px;
    color: black;
    background-color: lightgray;
    border: none;
    border-radius: 10px;
  }
`

export default Settings