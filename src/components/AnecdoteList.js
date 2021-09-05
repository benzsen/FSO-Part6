
import React from 'react'
import { voteAnec } from "../reducers/anecdoteReducer"
import { voteNotif, removeNotif } from "../reducers/notificationReducer"
import { useSelector, useDispatch } from 'react-redux'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anec)
  const dispatch = useDispatch()

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
            dispatch(voteNotif(anecdote.id))
            setTimeout(() => {
              dispatch(removeNotif())
            }, 5000)

          }}>vote</button>
        </div>
      </div>
    )}
  </div>
  )
}

export default AnecdoteList
