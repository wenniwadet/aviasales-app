import classNames from 'classnames'

import styles from './TicketSort.module.scss'

function TicketSort({ sort, toggleSort }) {
  const typesSort = [
    { typeSort: 'cheapest', label: 'Самый дешевый' },
    { typeSort: 'fastest', label: 'Самый быстрый' },
    { typeSort: 'optimal', label: 'Оптимальный' },
  ]

  const handleChange = ({ target }) => {
    toggleSort(target.value)
  }

  const buttonsSort = typesSort.map(({ typeSort, label }) => {
    const itemClass = classNames({
      [styles.ticketSort__item]: true,
      [styles.ticketSort__item__active]: typeSort === sort,
      [styles.ticketSort__item__left]: typeSort === 'cheapest',
      [styles.ticketSort__item__right]: typeSort === 'optimal',
    })

    return (
      <li className={itemClass} key={typeSort}>
        <label className={styles.ticketSort__label} htmlFor={typeSort}>
          {label}
        </label>
        <input
          type="radio"
          name="sort"
          value={typeSort}
          id={typeSort}
          onChange={handleChange}
          checked={typeSort === sort}
          hidden
        />
      </li>
    )
  })

  return <ul className={styles.ticketSort}>{buttonsSort}</ul>
}

export default TicketSort
