
import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const anecdotes = useSelector(state => state.anec)
  const notification = useSelector(state => state.notif.message)
  const anecId = useSelector(state => state.notif.id)

  //console.log("anecId", anecId)

  const anecVoted = () => {
    const anecFound = anecdotes.find(n => n.id === anecId)
    //console.log("anecFound",anecFound);
    if (anecId === null || anecFound === undefined){
      return ""
    }
    return anecFound.content
  }

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notification + anecVoted()}
    </div>
  )
}

export default Notification
