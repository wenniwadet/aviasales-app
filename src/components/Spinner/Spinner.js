import { Progress } from 'antd'

import styles from './Spinner.module.scss'

function Spinner({ percent }) {
  return (
    <Progress
      className={styles.spinner}
      percent={percent}
      showInfo={false}
      status="active"
      trailColor="transparent"
      strokeLinecap="butt"
    />
  )
}

export default Spinner
