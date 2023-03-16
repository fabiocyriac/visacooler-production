import { IoBarChartSharp } from 'react-icons/io5'
import { MdQueryStats } from 'react-icons/md'
import { FaWpforms } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'

const links = [
  { id: 1, text: 'stats', path: '/', icon: <IoBarChartSharp /> },
  { id: 2, text: 'all visas', path: 'all-visas', icon: <MdQueryStats /> },
  { id: 3, text: 'apply visa', path: 'apply-visa', icon: <FaWpforms /> },
  { id: 4, text: 'my visa', path: 'all-visas', icon: <MdQueryStats /> },
  { id: 5, text: 'profile', path: 'profile', icon: <ImProfile /> },
  { id: 6, text: 'Messages', path: 'profile', icon: <ImProfile /> },
  { id: 7, text: 'Immigration Documents', path: 'profile', icon: <ImProfile /> },
]

export default links
