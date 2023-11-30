import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import InputText from '../../common/components/Input/InputText'
import SelectBox from "../../common/components/Input/SelectBox"
import ErrorText from '../../common/components/Typography/ErrorText'
import { editService, getServices } from "../serviceSlice"
import { showNotification } from "../../common/headerSlice"
import { countries } from "countries-list";
import { visaTypeOptions } from "../../../utils"

const INITIAL_SERVICE_OBJ = {
    country: "",
    visaType: "",
    description: "",
    price: "",
}

function EditServiceModalBody({ extraObject, closeModal }) {
    const dispatch = useDispatch()
    const { serviceDetails, isLoading } = useSelector(state => state.service)
    const [errorMessage, setErrorMessage] = useState("")
    const [serviceObj, setServiceObj] = useState(serviceDetails)

    const saveNewLead = () => {
        if (serviceObj.country.trim() === "") return setErrorMessage("Country is required!")
        else if (serviceObj.visaType.trim() === "") return setErrorMessage("Category is required!")
        else if (serviceObj.description.trim() === "") return setErrorMessage("Description is required!")
        else if (serviceObj.price === "") return setErrorMessage("Price is required!")
        else {
            dispatch(editService(serviceObj)).then((response) => {
                if (response.error) {
                    dispatch(showNotification({ message: response.error.message, status: 0 }))
                    closeModal()
                } else {
                    dispatch(getServices(extraObject))
                    dispatch(showNotification({ message: "New Service Updated!", status: 1 }))
                    closeModal()
                }
            });
        }
    }

    const updateFormValue = ({ updateType, value }) => {
        setErrorMessage("")
        setServiceObj({ ...serviceObj, [updateType]: value })
    }


    const getCountryList = () => {
        const countryArray = [];
        Object.keys(countries).forEach((country) => {
            countryArray.push(countries[country].name);
        });
        return countryArray.sort();
    };

    return (
        <>
            {serviceObj && <>
                <SelectBox options={['Select', ...getCountryList()]} updateType="country" labelTitle="Select Country" placeholder="Select Country" containerStyle="w-full" labelDescription="Please Select Country" defaultValue={serviceObj?.country} updateFormValue={updateFormValue} />

                <SelectBox options={['Select', ...visaTypeOptions]} updateType="visaType" labelTitle="select category" placeholder="select category" containerStyle="mt-4 w-full" labelDescription="Please Select category" defaultValue={serviceObj?.visaType} updateFormValue={updateFormValue} />

                <InputText type="text" defaultValue={serviceObj?.description} updateType="description" containerStyle="mt-4" labelTitle="Description" updateFormValue={updateFormValue} />

                <InputText type="text" defaultValue={serviceObj?.price} updateType="price" containerStyle="mt-4" labelTitle="Price" updateFormValue={updateFormValue} />


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

export default EditServiceModalBody