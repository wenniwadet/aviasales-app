import AviasalesAPI from '../api/api'

export const SET_SORT = 'SET_SORT'

export const SET_FILTER = 'SET_FILTER'
export const SET_FILTER_ALL = 'SET_FILTER_ALL'

export const UPDATE_VISIBLE_TICKETS = 'UPDATE_VISIBLE_TICKETS'

export const REQUEST_TICKETS = 'REQUEST_TICKETS'
export const TICKETS_LOADED = 'TICKETS_LOADED'
export const TICKETS_ERROR = 'TICKETS_ERROR'

const aviasalesAPI = new AviasalesAPI()

export function setSort(payload) {
  return {
    type: SET_SORT,
    payload,
  }
}

export function setFilter(payload) {
  return {
    type: SET_FILTER,
    payload,
  }
}

export function setFilterAll() {
  return {
    type: SET_FILTER_ALL,
  }
}

export function updateVisibleTickets() {
  return {
    type: UPDATE_VISIBLE_TICKETS,
  }
}

export function ticketsRequested(payload) {
  return {
    type: REQUEST_TICKETS,
    payload,
  }
}

export function ticketsLoaded() {
  return {
    type: TICKETS_LOADED,
  }
}

export function ticketsError(payload) {
  return {
    type: TICKETS_ERROR,
    payload,
  }
}

export function getTickets() {
  return async (dispatch) => {
    try {
      const res = await aviasalesAPI.getTicketList()

      if (!res) {
        dispatch(getTickets())
        return
      }

      if (!res.stop) {
        dispatch(ticketsRequested(res.tickets))
        dispatch(getTickets())
      } else {
        dispatch(ticketsLoaded())
      }
    } catch (error) {
      dispatch(ticketsError(error.message))
    }
  }
}
