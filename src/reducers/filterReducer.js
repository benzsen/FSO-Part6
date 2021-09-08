
const reducer = (state = "", action) => {
  switch (action.type) {
    case "SETFILTER":
      return action.content
    default:
      return state
  }
}

export const setFilter = (content) => (
  {
    type: 'SETFILTER',
    content
  }
)

export default reducer
