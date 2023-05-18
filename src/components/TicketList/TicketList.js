import { Skeleton } from 'antd'

import TicketItem from '../TicketItem'
import Spinner from '../Spinner'
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator'
import logo from '../../assets/img/airplane-ticket.png'

import styles from './TicketList.module.scss'

export default function TicketList({ tickets, onUpdate, loading, loadProgress, error, lengthOriginalTicketList }) {
  const notFoundMessage = (
    <div className={styles.notFound}>
      <img className={styles.notFound__logo} src={logo} alt="Билеты не найдены" />
      <span className={styles.notFound__message}>Рейсов, подходящих под заданные фильтры, не найдено</span>
    </div>
  )
  const errorMessage = error && <ErrorIndicator />
  const spinner = loading && <Spinner percent={loadProgress} />

  const skeleton = !error && [1, 2, 3, 4, 5].map(() => <Skeleton active />)
  const items = lengthOriginalTicketList ? tickets.map((el) => <TicketItem data={el} key={el.id} />) : skeleton

  const content =
    !tickets.length && lengthOriginalTicketList ? (
      notFoundMessage
    ) : (
      <>
        {items}
        <button className={styles.ticketList__btn} type="button" onClick={onUpdate}>
          Показать еще 5 билетов!
        </button>
      </>
    )

  return (
    <>
      {spinner}
      <ul className={styles.ticketList}>
        {errorMessage}
        {content}
      </ul>
    </>
  )
}
