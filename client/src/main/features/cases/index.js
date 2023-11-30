import moment from "moment"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../features/common/components/Cards/TitleCard"
import { openModal } from "../common/modalSlice"
import { getCases, getCaseDetails } from "./caseSlice"
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from '../../utils/globalConstantUtil'
import TrashIcon from '@heroicons/react/24/outline/TrashIcon'
import PencilSquareIcon from '@heroicons/react/24/outline/PencilSquareIcon'
import EllipsisVerticalIcon from '@heroicons/react/24/outline/EllipsisVerticalIcon'

const initialState = {
    searchCountry: 'Select',
    searchType: 'all',
    searchCompany: 'all',
    sort: 'latest',
};

const TopSideButtons = () => {

    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)
    const { page } = useSelector(state => state.case)
    const openAddNewCaseModal = () => {
        const currentCase = { page };
        dispatch(openModal({ title: "Add New Case", bodyType: MODAL_BODY_TYPES.CASE_ADD, extraObject: currentCase }))
    }

    return (
        <div className="inline-block float-right">
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => openAddNewCaseModal()}>Add New</button>
        </div>
    )
}

function Cases() {
    const { user } = useSelector(state => state.auth)
    const { cases, page, isLoading } = useSelector(state => state.case)
    const { serviceDetails } = useSelector(state => state.service)
    const dispatch = useDispatch()

    useEffect(() => {
        if (user) {
            dispatch(getCases({page}))
        }
    }, [user])



    const getDummyStatus = (index) => {
        if (index % 5 === 0) return <div className="badge">Inactive</div>
        else if (index % 5 === 1) return <div className="badge badge-primary">In Progress</div>
        else if (index % 5 === 2) return <div className="badge badge-secondary">Sold</div>
        else if (index % 5 === 3) return <div className="badge badge-accent">Active</div>
        else return <div className="badge badge-ghost">Open</div>
    }

    const openEditCaseModal = (item) => {
        dispatch(getCaseDetails(item._id)).then(() => {
            const currentCase = { page };
            dispatch(openModal({ title: "Edit Case", bodyType: MODAL_BODY_TYPES.CASE_EDIT, extraObject: currentCase }))
        });
    }
    const deleteCurrentCase = (item) => {
        const currentCase = { page };
        dispatch(openModal({ title: "Confirmation", bodyType: MODAL_BODY_TYPES.CONFIRMATION, extraObject: { message: `Are you sure you want to delete this Case?`, type: CONFIRMATION_MODAL_CLOSE_TYPES.CASE_DELETE, _id: item._id, data: currentCase } }))
    }

    return (
        <>

            <TitleCard title="Current Cases" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>

                {/* Leads List in table format loaded from slice after api call */}
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Created At</th>
                                <th>Status</th>
                                <th>Is Partner</th>
                                <th>Is Admin</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cases && cases.map((l, k) => {
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
                                                        <div className="text-sm opacity-50">{l.isAdmin ? 'Admin' : l.isPartner ? 'Partner' : 'Case'}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{l.email}</td>
                                            <td>{moment(new Date()).add(-5 * (k + 2), 'days').format("DD MMM YY")}</td>
                                            <td>{getDummyStatus(k)}</td>
                                            <td>{l.isPartner ? 'YES' : 'NO'}</td>
                                            <td>{l.isAdmin ? 'YES' : 'NO'}</td>
                                            <td className="pl-0"><button className="btn btn-square btn-ghost" onClick={() => openEditCaseModal(l)}><PencilSquareIcon className="w-5" /></button>
                                                <button className="btn btn-square btn-ghost" onClick={() => deleteCurrentCase(l)}><TrashIcon className="w-5" /></button>
                                                <button className="btn btn-square btn-ghost" onClick={() => deleteCurrentCase(l)}><EllipsisVerticalIcon className="w-5" /></button></td>
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


export default Cases