import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import sortReducer from './reducers/sortReducer'
import filterReducer from './reducers/filterReducer'
import ticketsReducer from './reducers/ticketsReducer'
import visibleTicketsReducer from './reducers/visibleTicketsReducer'

const rootReducer = combineReducers({
  sort: sortReducer,
  transferFilter: filterReducer,
  tickets: ticketsReducer,
  visibleTickets: visibleTicketsReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
