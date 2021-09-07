
export const setFilter = (content) => {
  return {
    type: 'SETFILTER',
    data: {content}
  }
}

const reducer = (state = "", action) => {
  switch (action.type) {
    case "SETFILTER":
      const content = action.data.content
      return content

    default:
      return state
  }
}

export default reducer
