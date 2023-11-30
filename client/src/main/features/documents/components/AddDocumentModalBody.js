import { useState } from "react"
import { useDispatch } from "react-redux"
import InputText from '../../common/components/Input/InputText'
import SelectBox from "../../common/components/Input/SelectBox"
import ErrorText from '../../common/components/Typography/ErrorText'
import { showNotification } from "../../common/headerSlice"
import { getDocuments, createDocument } from "../documentSlice"


const INITIAL_SERVICE_OBJ = {
    image: ""
}

function AddDocumentModalBody({ extraObject, closeModal }) {
    const dispatch = useDispatch()
    const [errorMessage, setErrorMessage] = useState("")
    const [documentObj, setDocumentObj] = useState(INITIAL_SERVICE_OBJ)


    const saveNewLead = () => {
        console.log(JSON.stringify(documentObj))
        let formData = new FormData();
        formData.append("image", documentObj.image);
        dispatch(createDocument(formData)).then(() => {
            dispatch(getDocuments(extraObject))
            dispatch(showNotification({ message: "New Document Added!", status: 1 }))
            closeModal()
        });
    }

    const handleChange = (name) => (e) => {
        const value = e.target.files[0];
        setDocumentObj({ ...documentObj, [name]: value });
    };

    return (
        <>
            <input className="mt-8 file-input file-input-bordered w-full" type="file" accept="image/*" name="image" onChange={handleChange("image")}/>
            <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
            <div className="modal-action">
                <button className="btn btn-ghost" onClick={() => closeModal()}>Cancel</button>
                <button className="btn btn-primary px-6" onClick={() => saveNewLead()}>Save</button>
            </div>
        </>
    )
}

export default AddDocumentModalBody