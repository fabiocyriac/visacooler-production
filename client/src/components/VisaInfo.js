import Wrapper from '../assets/wrappers/VisaInfo'

const VisaInfo = ({ icon, text }) => {
  return (
    <Wrapper>
      <span className='icon'>{icon}</span>
      <span className='text'>{text}</span>
    </Wrapper>
  )
}

export default VisaInfo
