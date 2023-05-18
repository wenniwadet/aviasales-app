import { useDispatch, useSelector } from 'react-redux'

import { setFilter, setFilterAll } from '../../store/actions'

import TicketFilter from './TicketFilter'

function TicketFilterContainer() {
  const dispatch = useDispatch()
  const filters = useSelector((state) => state.transferFilter)

  const changeFilter = (filter) => {
    if (filter === 'all') {
      dispatch(setFilterAll(filter))
    } else {
      dispatch(setFilter(Number(filter)))
    }
  }

  return <TicketFilter filters={filters} changeFilter={changeFilter} />
}

export default TicketFilterContainer
