import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { showStats } from '../../redux/features/visa/visaService'
import Loading from '../../components/shared/Loading'
import StatsContainer from '../../components/dashboard/StatsContainer'
import ChartsContainer from '../../components/dashboard/ChartsContainer'

const Stats = () => {
  const { isLoading, monthlyApplications } = useSelector(state => state.visa);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStats());
    // eslint-disable-next-line
  }, [])
  if (isLoading) {
    return <Loading />
  }
  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  )
}

export default Stats
