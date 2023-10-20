import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../common/headerSlice'
import Integration from '../integration'

function InternalPage(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Integrations"}))
      }, [])
      
    return(
        <Integration />
    )
}

export default InternalPage