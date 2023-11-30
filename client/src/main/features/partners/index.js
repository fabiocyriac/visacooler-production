import moment from "moment"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../features/common/components/Cards/TitleCard"
import { openModal } from "../common/modalSlice"
import { getPartners, getPartnerDetails } from "./partnerSlice"
import { getUserDetails } from "../users/userSlice"
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from '../../utils/globalConstantUtil'
import TrashIcon from '@heroicons/react/24/outline/TrashIcon'
import PencilSquareIcon from '@heroicons/react/24/outline/PencilSquareIcon'
import EllipsisVerticalIcon from '@heroicons/react/24/outline/EllipsisVerticalIcon'
import UserPlusIcon from '@heroicons/react/24/outline/UserPlusIcon'


const TopSideButtons = () => {

    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)
    const { page } = useSelector(state => state.partner)
    const openAddNewPartnerModal = () => {
        const currentPartner = { page };
        dispatch(openModal({ title: "Add New Partner", bodyType: MODAL_BODY_TYPES.PARTNER_ADD, extraObject: currentPartner }))
    }

    return (
        <div className="inline-block float-right">
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => openAddNewPartnerModal()}>Add New</button>
        </div>
    )
}

function Partners() {
    const { user } = useSelector(state => state.auth)
    const { partners, page, isLoading } = useSelector(state => state.partner)
    const { partnerDetails } = useSelector(state => state.partner)
    const dispatch = useDispatch()

    useEffect(() => {
        if (user) {
            dispatch(getPartners({ page }))
        }
    }, [user])



    const getDummyStatus = (index) => {
        if (index % 5 === 0) return <div className="badge">Inactive</div>
        else if (index % 5 === 1) return <div className="badge badge-primary">In Progress</div>
        else if (index % 5 === 2) return <div className="badge badge-secondary">Sold</div>
        else if (index % 5 === 3) return <div className="badge badge-accent">Active</div>
        else return <div className="badge badge-ghost">Open</div>
    }

    const openEditPartnerModal = (item) => {
        dispatch(getPartnerDetails(item._id)).then(() => {
            const currentPartner = { page };
            dispatch(openModal({ title: "Edit Partner", bodyType: MODAL_BODY_TYPES.PARTNER_EDIT, extraObject: currentPartner }))
        });
    }

    const openAddAdminModal = (item) => {
        const currentPartner = { page, email: item.email, _id: item._id };
        dispatch(openModal({ title: "Add Admin User", bodyType: MODAL_BODY_TYPES.ADMIN_ADD, extraObject: currentPartner }))
    }

    const deleteCurrentPartner = (item) => {
        const currentPartner = { page };
        dispatch(openModal({ title: "Confirmation", bodyType: MODAL_BODY_TYPES.CONFIRMATION, extraObject: { message: `Are you sure you want to delete this Partner?`, type: CONFIRMATION_MODAL_CLOSE_TYPES.PARTNER_DELETE, _id: item._id, data: currentPartner } }))
    }

    return (
        <>

            <TitleCard title="Current Partners" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>

                {/* Leads List in table format loaded from slice after api call */}
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Company</th>
                                <th>Updated At</th>
                                <th>Phone</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                partners && partners.map((l, k) => {
                                    return (
                                        <tr key={k}>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src="https://gravatar.com/avatar/c75ab6dd212436717eb71596d590bee9?s=400&d=mp&r=x" alt="Avatar" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{l.name}</div>
                                                        <div className="text-sm opacity-50">{l.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{l.company}</td>
                                            <td>{new Date(l.updatedAt).toDateString()}</td>
                                            <td>{l.phone}</td>
                                            <td>{getDummyStatus(k)}</td>
                                            <td className="pl-0">
                                                <button className="btn btn-square btn-ghost" onClick={() => openEditPartnerModal(l)}><PencilSquareIcon className="w-5" /></button>
                                                <button className="btn btn-square btn-ghost" onClick={() => deleteCurrentPartner(l)}><TrashIcon className="w-5" /></button>
                                                <div className="dropdown dropdown-bottom dropdown-end  ml-2">
                                                    <label tabIndex={0} className="btn btn-ghost btn-sm normal-case btn-square"><EllipsisVerticalIcon className="w-5" /></label>
                                                    <ul tabIndex={0} className="dropdown-content menu menu-compact  p-2 shadow bg-base-100 rounded-box w-52">
                                                        <li><a onClick={() => openAddAdminModal(l)}><UserPlusIcon className="w-4" />Create Admin</a></li>
                                                    </ul>
                                                </div>
                                            </td>
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


export default Partners