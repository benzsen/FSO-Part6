const notifStart = {
  message: ""
}

export const voteNotif = (id) => {
  return {
    type: 'SHOWVOTE',
    data: {id}
  }
}

export const removeNotif = (id) => {
  return {
    type: 'REMOVE'
  }
}

const reducer = (state = notifStart, action) => {
  switch (action.type) {
    case "SHOWVOTE":
      const id = action.data.id
      return ({
        message:"Voted for ",
        id: id
      })
    case "REMOVE":
      return ({
        message:"",
        id: null
      })

    default:
      return state
  }
}

export default reducer
