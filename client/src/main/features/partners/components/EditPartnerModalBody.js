import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import InputText from '../../common/components/Input/InputText'
import TextAreaInput from "../../common/components/Input/TextAreaInput"
import SelectBox from "../../common/components/Input/SelectBox"
import ErrorText from '../../common/components/Typography/ErrorText'
import { editPartner, getPartners } from "../partnerSlice"
import { showNotification } from "../../common/headerSlice"
import { countries } from "countries-list";
import { visaTypeOptions } from "../../../utils"


function EditPartnerModalBody({ extraObject, closeModal }) {
    const dispatch = useDispatch()
    const { partnerDetails, isLoading } = useSelector(state => state.partner)
    const [errorMessage, setErrorMessage] = useState("")
    const [partnerObj, setPartnerObj] = useState(partnerDetails)

    const saveNewLead = () => {
        console.log(JSON.stringify(partnerObj))
        if (partnerObj.name === "") return setErrorMessage("name is required!")
        else if (partnerObj.email === "") return setErrorMessage("email is required!")
        else {
            dispatch(editPartner(partnerObj)).then(() => {
                dispatch(getPartners(extraObject))
                dispatch(showNotification({ message: "Partner Updated!", status: 1 }))
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
            {partnerObj && <>

                <InputText type="text" defaultValue={partnerObj.name} updateType="name" containerStyle="mt-4" labelTitle="Name" updateFormValue={updateFormValue} />

                <InputText type="text" defaultValue={partnerObj.email} updateType="email" containerStyle="mt-4" labelTitle="Email" updateFormValue={updateFormValue} />
                
                <InputText type="text" defaultValue={partnerObj.company} updateType="company" containerStyle="mt-4" labelTitle="Company" updateFormValue={updateFormValue} />

                <InputText type="text" defaultValue={partnerObj.phone} updateType="phone" containerStyle="mt-4" labelTitle="Phone" updateFormValue={updateFormValue} />

                 <SelectBox options={["Pending", "Active", "Inactive"]} updateType="status" labelTitle="Select Status" placeholder="Select Status" containerStyle="mt-4 w-full" labelDescription="Please Select IsPartner" defaultValue={partnerObj.isPartner ? "True" : "False"} updateFormValue={updateFormValue} />

                <TextAreaInput labelTitle="Description" defaultValue={partnerObj.description} updateType="description" containerStyle="mt-4" updateFormValue={updateFormValue} />

                <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
                <div className="modal-action">
                    <button className="btn btn-ghost" onClick={() => closeModal()}>Cancel</button>
                    <button className="btn btn-primary px-6" onClick={() => saveNewLead()}>Save</button>
                </div>
            </>
            }
        </>

    )
}

export default EditPartnerModalBody