import { useSelector } from 'react-redux'

const Alert = () => {
  const { alertType, alertText } = useSelector(state => state.util)
  return <div className={`alert alert-${alertType}`}>{alertText}</div>
}

export default Alert
