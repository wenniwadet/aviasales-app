import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import TicketFilterContainer from '../TicketFilter'
import TicketSortContainer from '../TicketSort'
import { getTickets } from '../../store/actions'
import TicketListContainer from '../TicketList'

import logo from './Logo.png'
import styles from './App.module.scss'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTickets())
  }, [dispatch])

  return (
    <div className={styles.App}>
      <img className={styles.App__logo} src={logo} alt="logo" />
      <main className={styles.App__container}>
        <aside className={styles.App__sidebar}>
          <TicketFilterContainer />
        </aside>
        <div className={styles.App__content}>
          <TicketSortContainer />
          <TicketListContainer />
        </div>
      </main>
    </div>
  )
}

export default App
