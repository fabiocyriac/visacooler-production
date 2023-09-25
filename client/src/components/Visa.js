import moment from 'moment'
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setEditVisa } from '../redux/features/visa/visaSlice'
import { deleteVisa } from '../redux/features/visa/visaService'
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
  const dispatch = useDispatch()

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
          <VisaInfo icon={<FaLocationArrow />} text1={'Country: '} text2={visaLocation} />
          <VisaInfo icon={<FaCalendarAlt />} text1={`date: `} text2={date} />
          <VisaInfo icon={<FaBriefcase />} text1={`Type: `} text2={visaType} />
          <VisaInfo icon={<FaBriefcase />} text1={`Location: `} text2={visaLocation} />
          <VisaInfo icon={<FaBriefcase />} text1={`date: `} text2={date} />
          <VisaInfo icon={<FaCalendarAlt />} text1={`Location: `} text2={visaLocation} />
          <VisaInfo icon={<FaLocationArrow />} text1={`Type: `} text2={visaType} />
          <VisaInfo icon={<FaLocationArrow />} text1={`caseManager: `} text2={caseManager} />
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className='actions'>
            <Link
              to='/apply-visa'
              className='btn edit-btn'
              onClick={() => dispatch(setEditVisa(_id))}
            >
              Apply
            </Link>
            <button
              type='button'
              className='btn delete-btn'
              onClick={() => dispatch(deleteVisa(_id))}
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
