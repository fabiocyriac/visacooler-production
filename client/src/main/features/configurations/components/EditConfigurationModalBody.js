import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import InputText from '../../common/components/Input/InputText'
import SelectBox from "../../common/components/Input/SelectBox"
import ErrorText from '../../common/components/Typography/ErrorText'
import { editUser, getUsers } from "../categorySlice"
import { showNotification } from "../../common/headerSlice"
import { countries } from "countries-list";
import { visaTypeOptions } from "../../../utils"
import { Tabs, Tab } from "../../common/components/Tabs/Tabs"


const INITIAL_SERVICE_OBJ = {
    country: "",
    visaType: "",
    description: "",
    price: "",
}

function EditUserModalBody({ extraObject, closeModal }) {
    const dispatch = useDispatch()
    const { userDetails, isLoading } = useSelector(state => state.user)
    const [errorMessage, setErrorMessage] = useState("")
    const [serviceObj, setServiceObj] = useState(userDetails)

    const saveNewLead = () => {
        console.log(JSON.stringify(serviceObj))
        if (serviceObj.name === "") return setErrorMessage("name is required!")
        else if (serviceObj.email === "") return setErrorMessage("email is required!")
        else {
            dispatch(editUser(serviceObj)).then(() => {
                dispatch(getUsers(extraObject))
                dispatch(showNotification({ message: "User Updated!", status: 1 }))
                closeModal()
            });
        }
    }

    const updateFormValue = ({ updateType, value }) => {
        setErrorMessage("")
        if(updateType == "isPartner" || updateType == "isAdmin"){
            value = (value === "True");
        }
        setServiceObj({ ...serviceObj, [updateType]: value })
    }


    return (
        <>
        <Tabs>
                    <Tab label="Categories">
                       
            {serviceObj && <>

                <InputText type="text" defaultValue={serviceObj.name} updateType="name" labelTitle="Name" updateFormValue={updateFormValue} />

                <InputText type="text" defaultValue={serviceObj.email} updateType="email" containerStyle="mt-4" labelTitle="Email" updateFormValue={updateFormValue} />
                
                <SelectBox options={["Select", "True", "False"]} updateType="isPartner" labelTitle="Select IsPartner" placeholder="Select IsPartner" containerStyle="mt-4 w-full" labelDescription="Please Select IsPartner" defaultValue={serviceObj.isPartner ? "True" : "False"} updateFormValue={updateFormValue} />

                <SelectBox options={["Select", "True", "False"]} updateType="isAdmin" labelTitle="Select IsAdmin" placeholder="select IsAdmin" containerStyle="mt-4 w-full" labelDescription="Please Select IsAdmin" defaultValue={serviceObj.isAdmin ? "True" : "False"} updateFormValue={updateFormValue} />


                <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
                <div className="modal-action">
                    <button className="btn btn-ghost" onClick={() => closeModal()}>Cancel</button>
                    <button className="btn btn-primary px-6" onClick={() => saveNewLead()}>Save</button>
                </div>
            </>
            }
             </Tab>

             <Tab label="Branding">
                       
            {serviceObj && <>

                <InputText type="text" defaultValue={serviceObj.name} updateType="name" containerStyle="mt-4" labelTitle="Name" updateFormValue={updateFormValue} />

                <InputText type="text" defaultValue={serviceObj.email} updateType="email" containerStyle="mt-4" labelTitle="Email" updateFormValue={updateFormValue} />
                
                <SelectBox options={["Select", "True", "False"]} updateType="isPartner" labelTitle="Select IsPartner" placeholder="Select IsPartner" containerStyle="mt-4 w-full" labelDescription="Please Select IsPartner" defaultValue={serviceObj.isPartner ? "True" : "False"} updateFormValue={updateFormValue} />

                <SelectBox options={["Select", "True", "False"]} updateType="isAdmin" labelTitle="Select IsAdmin" placeholder="select IsAdmin" containerStyle="mt-4 w-full" labelDescription="Please Select IsAdmin" defaultValue={serviceObj.isAdmin ? "True" : "False"} updateFormValue={updateFormValue} />


                <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
                <div className="modal-action">
                    <button className="btn btn-ghost" onClick={() => closeModal()}>Cancel</button>
                    <button className="btn btn-primary px-6" onClick={() => saveNewLead()}>Save</button>
                </div>
            </>
            }
             </Tab>

        </Tabs>
        </>
       

    )
}

export default EditUserModalBody