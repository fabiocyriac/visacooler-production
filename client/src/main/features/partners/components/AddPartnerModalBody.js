import { useState } from "react"
import { useDispatch } from "react-redux"
import InputText from '../../common/components/Input/InputText'
import TextAreaInput from '../../common/components/Input/TextAreaInput'
import SelectBox from "../../common/components/Input/SelectBox"
import ErrorText from '../../common/components/Typography/ErrorText'
import { showNotification } from "../../common/headerSlice"
import { getPartners, createPartner } from "../partnerSlice"
import { countries } from "countries-list"
import { visaTypeOptions } from "../../../utils"

const INITIAL_SERVICE_OBJ = {
    name: "",
    email: "",
    company: "",
    logo: "",
    phone: "",
    description: "",
}

function AddPartnerModalBody({ extraObject, closeModal }) {
    const dispatch = useDispatch()
    const [errorMessage, setErrorMessage] = useState("")
    const [partnerObj, setPartnerObj] = useState(INITIAL_SERVICE_OBJ)


    const saveNewLead = () => {
        console.log(JSON.stringify(partnerObj))
        if (partnerObj.email.trim() === "") return setErrorMessage("Email is required!")
        else {
            dispatch(createPartner(partnerObj)).then(() => {
                dispatch(getPartners(extraObject))
                dispatch(showNotification({ message: "New Partner Added!", status: 1 }))
                closeModal()
            });
        }
    }

    const updateFormValue = ({ updateType, value }) => {
        setErrorMessage("")
        setPartnerObj({ ...partnerObj, [updateType]: value })
    }


    return (
        <>
            <InputText type="text" defaultValue={partnerObj.name} updateType="name" containerStyle="mt-4" labelTitle="Name" updateFormValue={updateFormValue} />
            <InputText type="text" defaultValue={partnerObj.email} updateType="email" containerStyle="mt-4" labelTitle="Email" updateFormValue={updateFormValue} />
            <InputText type="text" defaultValue={partnerObj.company} updateType="company" containerStyle="mt-4" labelTitle="Company" updateFormValue={updateFormValue} />
            <InputText type="text" defaultValue={partnerObj.logo} updateType="logo" containerStyle="mt-4" labelTitle="Logo" updateFormValue={updateFormValue} />
            <InputText type="text" defaultValue={partnerObj.phone} updateType="phone" containerStyle="mt-4" labelTitle="Phone" updateFormValue={updateFormValue} />
            <TextAreaInput labelTitle="Description" defaultValue={partnerObj.description} updateType="description" containerStyle="mt-4" updateFormValue={updateFormValue} />

            <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
            <div className="modal-action">
                <button className="btn btn-ghost" onClick={() => closeModal()}>Cancel</button>
                <button className="btn btn-primary px-6" onClick={() => saveNewLead()}>Save</button>
            </div>
        </>
    )
}

export default AddPartnerModalBody