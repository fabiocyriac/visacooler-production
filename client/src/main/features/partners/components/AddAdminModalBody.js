import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import InputText from '../../common/components/Input/InputText'
import SelectBox from "../../common/components/Input/SelectBox"
import ErrorText from '../../common/components/Typography/ErrorText'
import { showNotification } from "../../common/headerSlice"
import { createAdminUser, getPartners } from "../partnerSlice"
import { countries } from "countries-list";
import { visaTypeOptions } from "../../../utils"


function AddAdminModalBody({ extraObject, closeModal }) {
    const dispatch = useDispatch()
    const { adminDetails, error, isLoading } = useSelector(state => state.partner)
    const [errorMessage, setErrorMessage] = useState("")
    const [userObj, setUserObj] = useState({ email: extraObject.email, password: "chakka", createdBy: extraObject._id })


    const saveNewLead = () => {
        console.log(JSON.stringify(userObj))
        if (userObj.email.trim() === "") return setErrorMessage("Email is required!")
        else {
            dispatch(createAdminUser(userObj)).then((response) => {
                if (response.error) {
                    dispatch(showNotification({ message: response.payload, status: 0 }))
                    closeModal()
                } else {
                    dispatch(getPartners(extraObject))
                    dispatch(showNotification({ message: "New Admin User Added!", status: 1 }))
                    closeModal()
                }
            })
        }
    }

    const updateFormValue = ({ updateType, value }) => {
        setErrorMessage("")
        setUserObj({ ...userObj, [updateType]: value })
    }


    return (
        <>
            <InputText type="text" defaultValue={userObj.email} updateType="email" containerStyle="mt-4" labelTitle="Email" updateFormValue={updateFormValue} />

            <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
            <div className="modal-action">
                <button className="btn btn-ghost" onClick={() => closeModal()}>Cancel</button>
                <button className="btn btn-primary px-6" onClick={() => saveNewLead()}>Save</button>
            </div>
        </>
    )
}

export default AddAdminModalBody