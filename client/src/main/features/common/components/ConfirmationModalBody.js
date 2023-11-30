import { useDispatch, useSelector } from 'react-redux'
import { getServices, deleteService } from '../../services/serviceSlice'
import { getUsers, deleteUser } from '../../users/userSlice'
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_CLOSE_TYPES } from '../../../utils/globalConstantUtil'
import { deleteLead } from '../../leads/leadSlice'
import { showNotification } from '../headerSlice'
import { deleteDocument, getDocuments } from '../../documents/documentSlice'
import { deletePartner, getPartners } from '../../partners/partnerSlice'

function ConfirmationModalBody({ extraObject, closeModal }) {

    const dispatch = useDispatch()

    const { message, type, _id, index, data } = extraObject


    const proceedWithYes = async () => {
        if (type === CONFIRMATION_MODAL_CLOSE_TYPES.LEAD_DELETE) {
            dispatch(deleteLead({ index }))
            dispatch(showNotification({ message: "Lead Deleted!", status: 1 }))
        }
        if (type === CONFIRMATION_MODAL_CLOSE_TYPES.SERVICE_DELETE) {
            dispatch(deleteService(_id)).then(() => {
                dispatch(getServices(data))
                dispatch(showNotification({ message: "Service Deleted!", status: 1 }))
            });
        }
        if (type === CONFIRMATION_MODAL_CLOSE_TYPES.USER_DELETE) {
            dispatch(deleteUser(_id)).then(() => {
                dispatch(getUsers(data))
                dispatch(showNotification({ message: "Service Deleted!", status: 1 }))
            });
        }
        if (type === CONFIRMATION_MODAL_CLOSE_TYPES.PARTNER_DELETE) {
            dispatch(deletePartner(_id)).then(() => {
                dispatch(getPartners(data))
                dispatch(showNotification({ message: "Partner Deleted!", status: 1 }))
            });
        }
        if (type === CONFIRMATION_MODAL_CLOSE_TYPES.DOCUMENT_DELETE) {
            const { file_type } = data
            console.log("chakka" + JSON.stringify(data))
            dispatch(deleteDocument({ _id, file_type })).then(() => {
                dispatch(getDocuments(data))
                dispatch(showNotification({ message: "Document Deleted!", status: 1 }))
            });
        }
        closeModal()
    }

    return (
        <>
            <p className=' text-xl mt-8 text-center'>
                {message}
            </p>

            <div className="modal-action mt-12">
                <button className="btn btn-ghost" onClick={() => closeModal()}>Cancel</button>
                <button className="btn btn-primary px-6" onClick={() => proceedWithYes()}>Yes</button>
            </div>
        </>
    )
}

export default ConfirmationModalBody