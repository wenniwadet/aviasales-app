import { useSelector, useDispatch } from 'react-redux'

import { updateVisibleTickets } from '../../store/actions'

import TicketList from './TicketList'

export default function TicketListContainer() {
  const dispatch = useDispatch()

  const { tickets, loading, error } = useSelector((state) => state.tickets)
  const { sort, transferFilter, visibleTickets } = useSelector((state) => state)

  const activeFilters = (arr) => {
    const result = []

    arr.forEach((el) => {
      if (el.status) {
        result.push(el.value)
      }
    })

    return result
  }

  const applySort = (arr) => {
    const sortTickets = [...arr]

    return sortTickets.sort((a, b) => {
      const { duration: durationA } = a.segments[0]
      const { duration: durationB } = b.segments[0]

      if (sort === 'fastest') {
        return durationA - durationB
      }
      if (sort === 'optimal') {
        return durationA - durationB || a.price - b.price
      }

      return a.price - b.price
    })
  }

  const applyFilter = (arr) => {
    const filters = activeFilters(transferFilter)

    return arr.filter((ticket) => {
      const { stops } = ticket.segments[0]

      if (filters.includes('all')) {
        return true
      }

      return filters.includes(stops.length)
    })
  }

  const sortedTickets = applySort(tickets)
  const sortedAndFilteredTickets = applyFilter(sortedTickets)

  const updateTicketList = () => {
    dispatch(updateVisibleTickets())
  }

  const progress = (tickets.length * 100) / 9555

  return (
    <TicketList
      tickets={sortedAndFilteredTickets.slice(0, visibleTickets)}
      lengthOriginalTicketList={tickets.length}
      loadProgress={progress}
      error={error}
      loading={loading}
      onUpdate={updateTicketList}
    />
  )
}
