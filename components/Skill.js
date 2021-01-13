import cn from 'classnames'

import styles from './Skill.module.css'

const Skill = ({children}) => (
  <span className={cn('py-1 px-2 mr-2 rounded bg-red-100', styles.skill)}>
    {children}
  </span>
)

export default Skill
