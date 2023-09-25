import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { showStats } from '../../redux/features/visa/visaService'
import { StatsContainer, Loading, ChartsContainer } from '../../components'

const Stats = () => {
  const { isLoading, monthlyApplications } = useSelector(state => state.visa);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStats());
    // eslint-disable-next-line
  }, [])
  if (isLoading) {
    return <Loading center />
  }
  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  )
}

export default Stats
