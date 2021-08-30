//Completed Part6.1-6.4, 6.8
//Not Complete Part 6.5

import React from 'react'
import AnecdoteList from "./components/AnecdoteList"
import AnecdoteForm from "./components/AnecdoteForm"

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList/>
      <AnecdoteForm/>
    </div>
  )
}

export default App