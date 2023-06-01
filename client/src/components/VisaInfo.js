import Wrapper from '../assets/wrappers/VisaInfo'

const VisaInfo = ({ icon, text1, text2 }) => {
  return (
    <Wrapper>
      <span className='icon'>{icon}</span>
      <span className='text1'>{text1}</span>
      <span className='text2'>{text2}</span>
    </Wrapper>
  )
}

export default VisaInfo
