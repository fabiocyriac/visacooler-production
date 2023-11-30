import { useState } from "react"
import { useDispatch } from "react-redux"
import InputText from '../../common/components/Input/InputText'
import SelectBox from "../../common/components/Input/SelectBox"
import ErrorText from '../../common/components/Typography/ErrorText'
import { showNotification } from "../../common/headerSlice"
import { getUsers, createUser } from "../userSlice"
import { countries } from "countries-list";
import { visaTypeOptions } from "../../../utils"

const INITIAL_SERVICE_OBJ = {
    email: "",
    password: "chakka"
}

function AddUserModalBody({ extraObject, closeModal }) {
    const dispatch = useDispatch()
    const [errorMessage, setErrorMessage] = useState("")
    const [userObj, setUserObj] = useState(INITIAL_SERVICE_OBJ)

    const saveNewLead = () => {
        console.log(JSON.stringify(userObj))
        if (userObj.email.trim() === "") return setErrorMessage("Email is required!")
        else {
            dispatch(createUser(userObj)).then((response) => {
                if (response.error) {
                    dispatch(showNotification({ message: response.error.message, status: 0 }))
                    closeModal()
                } else {
                    dispatch(getUsers(extraObject))
                    dispatch(showNotification({ message: "New User Added!", status: 1 }))
                    closeModal()
                }
            });
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

export default AddUserModalBody