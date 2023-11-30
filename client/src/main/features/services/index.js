import moment from "moment"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../features/common/components/Cards/TitleCard"
import { openModal } from "../common/modalSlice"
import { getServices, getServiceDetails } from "./serviceSlice"
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from '../../utils/globalConstantUtil'
import TrashIcon from '@heroicons/react/24/outline/TrashIcon'
import PencilSquareIcon from '@heroicons/react/24/outline/PencilSquareIcon'
import EllipsisVerticalIcon from '@heroicons/react/24/outline/EllipsisVerticalIcon'
import EyeIcon from '@heroicons/react/24/outline/EyeIcon'
import { showNotification } from '../common/headerSlice'

const initialState = {
    searchCountry: 'Select',
    searchType: 'all',
    searchCompany: 'all',
    sort: 'latest',
};

const TopSideButtons = () => {

    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)
    const { page } = useSelector(state => state.service)
    const openAddNewServiceModal = () => {
        const currentVisa = { ...initialState, page };
        dispatch(openModal({ title: "Add New Service", bodyType: MODAL_BODY_TYPES.SERVICE_ADD, extraObject: currentVisa }))
    }

    return (
        <div className="inline-block float-right">
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => openAddNewServiceModal()}>Add New</button>
        </div>
    )
}

function Services() {
    const { user } = useSelector(state => state.auth)
    const { services, page } = useSelector(state => state.service)
    const { serviceDetails } = useSelector(state => state.service)
    const dispatch = useDispatch()

    useEffect(() => {
        if (user) {
            const currentVisa = { ...initialState, page };
            dispatch(getServices(currentVisa))
        }
    }, [user])



    const getDummyStatus = (index) => {
        if (index % 5 === 0) return <div className="badge">Inactive</div>
        else if (index % 5 === 1) return <div className="badge badge-primary">In Progress</div>
        else if (index % 5 === 2) return <div className="badge badge-secondary">Sold</div>
        else if (index % 5 === 3) return <div className="badge badge-accent">Active</div>
        else return <div className="badge badge-ghost">Open</div>
    }

    const deleteCurrentLead = (item) => {
        const currentVisa = { ...initialState, page };
        dispatch(openModal({ title: "Confirmation", bodyType: MODAL_BODY_TYPES.CONFIRMATION, extraObject: { message: `Are you sure you want to delete this Service?`, type: CONFIRMATION_MODAL_CLOSE_TYPES.SERVICE_DELETE, _id: item._id, data: currentVisa } }))
    }

    const openEditNewServiceModal = (item) => {
        dispatch(getServiceDetails(item._id)).then(() => {
            const currentVisa = { ...initialState, page };
            dispatch(openModal({ title: "Edit New Service", bodyType: MODAL_BODY_TYPES.SERVICE_EDIT, extraObject: currentVisa }))
        });
    }


    return (
        <>

            <TitleCard title="Current Services" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>

                {/* Leads List in table format loaded from slice after api call */}
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Country</th>
                                <th>Created At</th>
                                <th>Status</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                services && services.map((l, k) => {
                                    return (
                                        <tr key={k}>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src="https://reqres.in/img/faces/7-image.jpg" alt="Avatar" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{l.visaType}</div>
                                                        <div className="text-sm opacity-50">{l.country}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{l.country}</td>
                                            <td>{moment(new Date()).add(-5 * (k + 2), 'days').format("DD MMM YY")}</td>
                                            <td>{getDummyStatus(k)}</td>
                                            <td>{l.price}</td>
                                            <td>{l.description}</td>
                                            <td className="pl-0">
                                                <button className="btn btn-square btn-ghost" onClick={() => openEditNewServiceModal(l)}><EyeIcon className="w-5" /></button>
                                                <button className="btn btn-square btn-ghost" onClick={() => openEditNewServiceModal(l)}><PencilSquareIcon className="w-5" /></button>
                                                <button className="btn btn-square btn-ghost" onClick={() => deleteCurrentLead(l)}><TrashIcon className="w-5" /></button>
                                                <button className="btn btn-square btn-ghost" onClick={() => deleteCurrentLead(l)}><EllipsisVerticalIcon className="w-5" /></button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </TitleCard>
        </>
    )
}


export default Services