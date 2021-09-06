
import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnec } from '../reducers/anecdoteReducer'
// import anecService from '../services/anecdotes'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const getId = () => (100000 * Math.random()).toFixed(0)
  const asObject = (anecdote) => {
    return {
      content: anecdote,
      id: getId(),
      votes: 0
    }
  }

  const addAnec = async (event) => {
    event.preventDefault()
    const content = event.target.anec.value
    const anecAsObject = asObject(content)
    // const newAnec = await anecService.createNew(anecAsObject)
    // dispatch(createAnec(anecAsObject))
    dispatch(createAnec(anecAsObject))
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnec}>
        <input name="anec" />
        <button type="submit">add</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
