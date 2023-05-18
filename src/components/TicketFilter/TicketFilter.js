import styles from './TicketFilter.module.scss'

function TicketFilter({ filters, changeFilter }) {
  const handleChange = ({ target }) => {
    changeFilter(target.value)
  }

  const transferFilters = filters.map(({ label, value, status }) => (
    <li className={styles.ticketFilter__item} key={value}>
      <input
        className={styles.ticketFilter__input}
        type="checkbox"
        name="transfer"
        value={value}
        id={label}
        onChange={handleChange}
        checked={status}
      />
      <label className={styles.ticketFilter__label} htmlFor={label}>
        {label}
      </label>
    </li>
  ))

  return (
    <div className={styles.ticketFilter}>
      <span className={styles.ticketFilter__header}>Количество пересадок</span>
      <ul className={styles.ticketFilter__list}>{transferFilters}</ul>
    </div>
  )
}

export default TicketFilter
