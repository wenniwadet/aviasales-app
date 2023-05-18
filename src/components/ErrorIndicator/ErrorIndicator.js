import logo from '../../assets/img/error.png'

import styles from './ErrorIndicator.module.scss'

function ErrorIndicator() {
  return (
    <div className={styles.errorIndicator}>
      <img className={styles.errorIndicator__logo} src={logo} alt="result not found" />
      <span className={styles.errorIndicator__message}>К сожалению, возникла проблема, обновите страницу</span>
    </div>
  )
}

export default ErrorIndicator
