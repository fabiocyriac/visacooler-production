import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Charts from '../charts'
import { setPageTitle } from '../common/headerSlice'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Analytics"}))
      }, [])


    return(
        <Charts />
    )
}

export default InternalPage