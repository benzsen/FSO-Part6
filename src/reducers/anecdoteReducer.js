
import anecService from '../services/anecdotes'

const sortedState = (anecs) => {
  console.log(anecs);
  return anecs.sort((a,b) => b.votes-a.votes)
}

export const voteAnec = (id) => {
  return async dispatch => {
    const anecs = await anecService.getAll()
    const anecToVote = anecs.find(n => n.id === id)
    const votedAnec = {...anecToVote, votes: anecToVote.votes +1}
    const applyVote = await anecService.updateVote(id, votedAnec)
    dispatch ({
      type: 'VOTE',
      data: {id}
    })
  }
}

export const createAnec = (content) => {
  return async dispatch => {
    const anecs = await anecService.createNew(content)
    dispatch({
      type: 'ADD',
      data: {content}
    })
  }
}

export const initializeAnecs = () => {
  return async dispatch => {
    const anecs = await anecService.getAll()
    dispatch({
      type: 'INIT_ANECS',
      data: anecs,
    })
  }
}

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case "VOTE":
      const id = action.data.id
      const anecToVote = state.find(n => n.id === id)
      const votedAnec = {...anecToVote, votes: anecToVote.votes +1}
      const updateVotedAnecList = state.map(anec =>anec.id !== id ? anec : votedAnec)
      return sortedState(updateVotedAnecList)
    case "ADD":
      return sortedState(state.concat(action.data.content))
    case "INIT_ANECS":
      return sortedState(action.data)
    default:
      return state
  }
}

export default reducer
