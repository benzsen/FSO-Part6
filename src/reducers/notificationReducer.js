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

let timeoutID
export const setNotification = (content, time) => {
  clearTimeout(timeoutID)
  return async dispatch => {

    const displayNotif = await dispatch({
      type: 'SHOWVOTE',
      data: {content}
    })
    timeoutID = setTimeout(() => {
      dispatch({
        type: 'REMOVE'
      })
    }, time*1000)
  }
}

const reducer = (state = notifStart, action) => {
  switch (action.type) {
    case "SHOWVOTE":
      const content = action.data.content
      const id = action.data.id
      return ({
        message: content,
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
