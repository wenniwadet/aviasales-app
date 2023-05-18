import TicketDetails from '../TicketDetails'

import styles from './TicketItem.module.scss'

export default function TicketItem({ data: { carrier, price, segments } }) {
  const logo = `https://pics.avs.io/99/36/${carrier}.png`
  const priceToStr = price.toString()
  const transformPrice =
    priceToStr.length > 5
      ? `${priceToStr.slice(0, 3)} ${priceToStr.slice(3)} Р`
      : `${priceToStr.slice(0, 2)} ${priceToStr.slice(2)} Р`

  return (
    <li className={styles.ticketItem}>
      <div className={styles.ticketItem__header}>
        <span className={styles.ticketItem__price}>{transformPrice}</span>
        <img className={styles.ticketItem__logo} src={logo} alt={`airline ${carrier}`} />
      </div>
      <div className={styles.ticketItem__body}>
        <TicketDetails info={segments[0]} />
        <TicketDetails info={segments[1]} />
      </div>
    </li>
  )
}
