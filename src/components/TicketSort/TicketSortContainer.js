import { useDispatch, useSelector } from 'react-redux'

import { setSort } from '../../store/actions'

import TicketSort from './TicketSort'

function TicketSortContainer() {
  const dispatch = useDispatch()

  const sort = useSelector((state) => state.sort)

  const toggleSort = (typeSort) => {
    dispatch(setSort(typeSort))
  }

  return <TicketSort sort={sort} toggleSort={toggleSort} />
}

export default TicketSortContainer
