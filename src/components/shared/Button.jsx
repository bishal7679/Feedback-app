import PropTypes from 'prop-types'


function Button( {children, type, version, isdisabled} ) {
  return (
    <button type={type} disabled={isdisabled} className={`btn btn-${version}`}>{children}</button>
  )
}


Button.defaultProps = {
    type: 'button',
    version: 'primary',
    isdisabled: false,
}

Button.propTypes = {
  type: PropTypes.string,
  version: PropTypes.string,
  isdisabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Button
