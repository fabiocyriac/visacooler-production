import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import Integration from '../../features/integration'
import Filters from '../../features/common/components/Input/Filters'


function InternalPage(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Integrations"}))
      }, [])
      
    return(
        <>
        <Integration />
        </>
    )
}

export default InternalPage