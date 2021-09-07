
import React from 'react'
import { voteAnec } from "../reducers/anecdoteReducer"
import { voteNotif, removeNotif, setNotification } from "../reducers/notificationReducer"
import { useSelector, useDispatch } from 'react-redux'

const AnecdoteList = () => {
  //const anecdotes = useSelector(state => state.anec)
  const dispatch = useDispatch()

  const anecdotes = useSelector(state => {
    const filter = state.filter.toLowerCase()
    return state.anecdotes.filter(a => a.content.toLowerCase().includes(filter))
  })

  return(
  <div>
    {anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={()=>{
            dispatch(voteAnec(anecdote.id))
            dispatch(setNotification(`You voted for '${anecdote.content}'`, 3))
          }}>vote</button>
        </div>
      </div>
    )}
  </div>
  )
}

export default AnecdoteList
