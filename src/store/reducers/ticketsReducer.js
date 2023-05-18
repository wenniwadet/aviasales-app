import { REQUEST_TICKETS, TICKETS_LOADED, TICKETS_ERROR } from '../actions'

const initialState = {
  tickets: [],
  loading: true,
  error: null,
}

const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_TICKETS:
      return {
        tickets: [...state.tickets, ...action.payload],
        loading: true,
        error: null,
      }
    case TICKETS_LOADED:
      return {
        ...state,
        loading: false,
      }
    case TICKETS_ERROR:
      return {
        tickets: [],
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}
export default ticketsReducer
