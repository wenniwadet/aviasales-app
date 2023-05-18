import { UPDATE_VISIBLE_TICKETS } from '../actions'

const visibleTicketsReducer = (state = 5, action) => {
  switch (action.type) {
    case UPDATE_VISIBLE_TICKETS:
      return state + 5

    default:
      return state
  }
}
export default visibleTicketsReducer
