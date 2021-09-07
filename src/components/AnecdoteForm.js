
import React, { useState } from 'react'
//import { useDispatch } from 'react-redux'
import { createAnec } from '../reducers/anecdoteReducer'
// import anecService from '../services/anecdotes'
import { connect } from 'react-redux'
import { setNotification } from "../reducers/notificationReducer"

const AnecdoteForm = (props) => {
  //const dispatch = useDispatch()
  const [anecdote, setAnecdote] = useState('')

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
    props.createAnec(anecAsObject)
    props.setNotification(`Created: '${event.target.anec.value}'`, 3)
    setAnecdote("")
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnec}>
        <input
          name="anec"
          value={anecdote}
          onChange={({ target }) => setAnecdote(target.value)}
        />
        <button type="submit">add</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  createAnec,
  setNotification
}

const ConnectedAnecdoteForm = connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)

export default ConnectedAnecdoteForm
