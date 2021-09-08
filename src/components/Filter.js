import React from 'react'
// import { useDispatch } from 'react-redux'
import { setFilter } from "../reducers/filterReducer"
import { connect } from 'react-redux'

const Filter = (props) => {
  //const dispatch = useDispatch()

  const handleChange = (event) => {
    event.preventDefault()

    props.setFilter(event.target.value)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const mapDispatchToProps = {
  setFilter
}

//export default Filter
const ConnectedFilter = connect(
  null,
  mapDispatchToProps
)(Filter)

export default ConnectedFilter
