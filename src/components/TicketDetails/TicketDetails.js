import { add } from 'date-fns'

import styles from './TicketDetails.module.scss'

function TicketDetails({ info: { origin, destination, date, duration, stops } }) {
  const departureTime = new Date(date)
  const arrivalTime = add(departureTime, { minutes: duration })

  const getDepartureAndArrivalTime = (departure, arrival) => {
    const arr = [departure, arrival]
    const transformArr = arr.map((el) => {
      const hours = el.getHours() < 10 ? `0${el.getHours()}` : el.getHours()
      const minutes = el.getMinutes() < 10 ? `0${el.getMinutes()}` : el.getMinutes()

      return `${hours}:${minutes}`
    })

    return `${transformArr[0]} - ${transformArr[0]}`
  }

  const getFlightTime = () => {
    const flightHours = Math.floor(duration / 60)
    const flightMinutes = duration % 60

    return flightMinutes ? `${flightHours}ч ${flightMinutes}м` : `${flightHours}ч`
  }

  const getNumbStops = () => {
    if (stops.length === 1) return '1 пересадка'
    if (stops.length > 1) return `${stops.length} пересадки`
    return 'Без пересадок'
  }

  const styleUpperText = `${styles.ticketItem__text} ${styles.ticketItem__text__upper}`
  const styleLowerText = `${styles.ticketItem__text} ${styles.ticketItem__text__lower}`

  const route = `${origin} – ${destination}`
  const departureAndArrivalTime = getDepartureAndArrivalTime(departureTime, arrivalTime)
  const flightTime = getFlightTime()
  const numbStops = getNumbStops()

  return (
    <div className={styles.ticketItem__segment}>
      <div className={styles.ticketItem__route}>
        <span className={styleUpperText}>{route}</span>
        <span className={styleLowerText}>{departureAndArrivalTime}</span>
      </div>
      <div className={styles.ticketItem__length}>
        <span className={styleUpperText}>В пути</span>
        <span className={styleLowerText}>{flightTime}</span>
      </div>
      <div className={styles.ticketItem__stops}>
        <span className={styleUpperText}>{numbStops}</span>
        <span className={styleLowerText}>{stops.join(', ')}</span>
      </div>
    </div>
  )
}

export default TicketDetails
