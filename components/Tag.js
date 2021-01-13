import PropTypes from 'prop-types'
import cn from 'classnames'

const Tag = ({children, backgroundColor}) => (
  <span className={cn('py-1 px-2 mr-2 rounded', `bg-${backgroundColor}-100`)}>
    {children}
  </span>
)

Tag.propTypes = {
  backgroundColor: PropTypes.string,
}

Tag.defaultProps = {
  backgroundColor: 'blue',
}

export default Tag
