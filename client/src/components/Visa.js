import moment from 'moment'
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/Visa'
import VisaInfo from './VisaInfo'

const Visa = ({
  _id,
  caseManager,
  country,
  visaLocation,
  visaType,
  createdAt,
  status,
}) => {
  const { setEditVisa, deleteVisa } = useAppContext()

  let date = moment(createdAt)
  date = date.format('MMM Do, YYYY')
  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{country}</div>
        <div className='info'>
          <h5>{visaType}</h5>
          <p>{visaLocation}</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <VisaInfo icon={<FaLocationArrow />} text={visaLocation} />
          <VisaInfo icon={<FaCalendarAlt />} text={date} />
          <VisaInfo icon={<FaBriefcase />} text={visaType} />
          <VisaInfo icon={<FaBriefcase />} text={`status: ${visaLocation}`} />
          <VisaInfo icon={<FaLocationArrow />} text={`visaType: ${visaType}`} />
          <VisaInfo icon={<FaCalendarAlt />} text={`date: ${date}`} />
          <VisaInfo icon={<FaBriefcase />} text={`status: ${visaLocation}`} />
          <VisaInfo icon={<FaBriefcase />} text={`status: ${visaLocation}`} />
          <VisaInfo icon={<FaCalendarAlt />} text={`status: ${visaType}`} />
          <VisaInfo icon={<FaLocationArrow />} text={`caseManager: ${caseManager}`} />
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className='actions'>
            <Link
              to='/apply-visa'
              className='btn edit-btn'
              onClick={() => setEditVisa(_id)}
            >
              Edit
            </Link>
            <button
              type='button'
              className='btn delete-btn'
              onClick={() => deleteVisa(_id)}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  )
}

export default Visa
