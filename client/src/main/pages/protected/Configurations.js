import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import Configurations from '../../features/configurations'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Configurations"}))
      }, [])


    return(
        <Configurations />
    )
}

export default InternalPage