import { MODAL_BODY_TYPES } from '../utils/globalConstantUtil'
import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '../features/common/modalSlice'
import AddLeadModalBody from '../features/leads/components/AddLeadModalBody'
import AddServiceModalBody from '../features/services/components/AddServiceModalBody'
import EditServiceModalBody from '../features/services/components/EditServiceModalBody'
import ConfirmationModalBody from '../features/common/components/ConfirmationModalBody'
import AddUserModalBody from '../features/users/components/AddUserModalBody'
import EditUserModalBody from '../features/users/components/EditUserModalBody'
import AddPartnerModalBody from '../features/partners/components/AddPartnerModalBody'
import EditPartnerModalBody from '../features/partners/components/EditPartnerModalBody'
import AddDocumentModalBody from '../features/documents/components/AddDocumentModalBody'
import EditDocumentModalBody from '../features/documents/components/EditDocumentModalBody'
import AddAdminModalBody from '../features/partners/components/AddAdminModalBody'
import AddConfigurationModalBody from '../features/configurations/components/AddConfigurationModalBody'
import EditConfigurationModalBody from '../features/configurations/components/EditConfigurationModalBody'



function ModalLayout() {

    const { isOpen, bodyType, size, extraObject, title } = useSelector(state => state.modal)
    const dispatch = useDispatch()

    const close = (e) => {
        dispatch(closeModal(e))
    }

    return (
        <>
            {/* The button to open modal */}
            {/* Put this part before </body> tag */}
            <div className={`modal ${isOpen ? "modal-open" : ""}`}>
                <div className={`modal-box  ${size === 'lg' ? 'max-w-5xl' : ''}`}>
                    <button className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => close()}>✕</button>
                    <h3 className="font-semibold text-2xl pb-6 text-center">{title}</h3>

                    {/* Loading modal body according to different modal type */}
                    {
                        {
                            [MODAL_BODY_TYPES.DOCUMENT_ADD]: <AddDocumentModalBody closeModal={close} extraObject={extraObject} />,
                            [MODAL_BODY_TYPES.DOCUMENT_EDIT]: <EditDocumentModalBody closeModal={close} extraObject={extraObject} />,
                            [MODAL_BODY_TYPES.USER_ADD]: <AddUserModalBody closeModal={close} extraObject={extraObject} />,
                            [MODAL_BODY_TYPES.USER_EDIT]: <EditUserModalBody closeModal={close} extraObject={extraObject} />,
                            [MODAL_BODY_TYPES.PARTNER_ADD]: <AddPartnerModalBody closeModal={close} extraObject={extraObject} />,
                            [MODAL_BODY_TYPES.ADMIN_ADD]: <AddAdminModalBody closeModal={close} extraObject={extraObject} />,
                            [MODAL_BODY_TYPES.PARTNER_EDIT]: <EditPartnerModalBody closeModal={close} extraObject={extraObject} />,
                            [MODAL_BODY_TYPES.SERVICE_ADD]: <AddServiceModalBody closeModal={close} extraObject={extraObject} />,
                            [MODAL_BODY_TYPES.SERVICE_EDIT]: <EditServiceModalBody closeModal={close} extraObject={extraObject} />,
                            [MODAL_BODY_TYPES.CONFIGURATION_ADD]: <AddConfigurationModalBody closeModal={close} extraObject={extraObject} />,
                            [MODAL_BODY_TYPES.CONFIGURATION_EDIT]: <EditConfigurationModalBody closeModal={close} extraObject={extraObject} />,
                            [MODAL_BODY_TYPES.LEAD_ADD_NEW]: <AddLeadModalBody closeModal={close} extraObject={extraObject} />,
                            [MODAL_BODY_TYPES.CONFIRMATION]: <ConfirmationModalBody extraObject={extraObject} closeModal={close} />,
                            [MODAL_BODY_TYPES.DEFAULT]: <div></div>
                        }[bodyType]
                    }
                </div>
            </div>
        </>
    )
}

export default ModalLayout