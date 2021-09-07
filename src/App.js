//Completed Part6.1-6.11, 6.17
//Did not complete Part 6.12

import React, {useEffect} from 'react'
import AnecdoteList from "./components/AnecdoteList"
import AnecdoteForm from "./components/AnecdoteForm"
import Notification from "./components/Notification"
import Filter from "./components/Filter"
// import anecService from './services/anecdotes'
import { initializeAnecs } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  // useEffect(() => {
  //   anecService
  //     .getAll().then(anecs => dispatch(initializeAnecs(anecs)))
  // }, [])

  useEffect(() => {
    dispatch(initializeAnecs())
  }, [dispatch])

  return (
    <div>
      <Notification/>
      <h2>Anecdotes</h2>
      <Filter/>
      <AnecdoteList/>
      <AnecdoteForm/>
    </div>
  )
}

export default App
