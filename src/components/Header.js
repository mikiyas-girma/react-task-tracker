import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <header>
      <h1 style={headStyles}> {title} </h1>
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

const headStyles = {
  color: 'red',
  backgroundColor: '#f3f3f3'
}

export default Header