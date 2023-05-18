import { SET_FILTER, SET_FILTER_ALL } from '../actions'

const initialState = [
  { label: 'Все', value: 'all', status: false },
  { label: 'Без пересадок', value: 0, status: true },
  { label: '1 пересадка', value: 1, status: false },
  { label: '2 пересадки', value: 2, status: false },
  { label: '3 пересадки', value: 3, status: false },
]

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      const indexFilter = state.findIndex(({ value }) => value === action.payload)
      const activeFilters = state.filter(({ status }, idx) => (indexFilter === idx ? false : status))

      return state.map((el, idx) => {
        if (el.value === 'all') {
          return activeFilters.length === 3 ? { ...el, status: true } : { ...el, status: false }
        }

        return indexFilter === idx ? { ...el, status: !el.status } : el
      })
    }

    case SET_FILTER_ALL:
      return state.map((el) => (state[0].status ? { ...el, status: false } : { ...el, status: true }))

    default:
      return state
  }
}

export default filterReducer
