import moment from "moment"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../features/common/components/Cards/TitleCard"
import { openModal } from "../common/modalSlice"
import { getDocuments, getDocumentDetails } from "./documentSlice"
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from '../../utils/globalConstantUtil'
import TrashIcon from '@heroicons/react/24/outline/TrashIcon'
import FolderArrowDownIcon from '@heroicons/react/24/outline/FolderArrowDownIcon'
import EllipsisVerticalIcon from '@heroicons/react/24/outline/EllipsisVerticalIcon'
import axios from 'axios'
import saveAs from 'file-saver'


const initialState = {
    searchCountry: 'Select',
    searchType: 'all',
    searchCompany: 'all',
    sort: 'latest',
};

const TopSideButtons = () => {

    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)
    const { page } = useSelector(state => state.document)
    const openAddNewDocumentModal = () => {
        const currentDocument = { page };
        dispatch(openModal({ title: "Add New Document", bodyType: MODAL_BODY_TYPES.DOCUMENT_ADD, extraObject: currentDocument }))
    }

    return (
        <div className="inline-block float-right">
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => openAddNewDocumentModal()}>Add New</button>
        </div>
    )
}

function Documents() {
    const { user } = useSelector(state => state.auth)
    const { documents, page, isLoading } = useSelector(state => state.document)
    const { serviceDetails } = useSelector(state => state.service)
    const dispatch = useDispatch()

    useEffect(() => {
        if (user) {
            dispatch(getDocuments({page}))
        }
    }, [user])



    const getDummyStatus = (index) => {
        if (index % 5 === 0) return <div className="badge">Inactive</div>
        else if (index % 5 === 1) return <div className="badge badge-primary">In Progress</div>
        else if (index % 5 === 2) return <div className="badge badge-secondary">Sold</div>
        else if (index % 5 === 3) return <div className="badge badge-accent">Active</div>
        else return <div className="badge badge-ghost">Open</div>
    }

    const openEditDocumentModal = (item, e) => {
        e.preventDefault();
        axios({
            url: `/api/v1/documents/${item.file_type}`,
            method: "GET",
            responseType: "blob"
        }).then((response) => {
          
            var file = new Blob([response.data], {type:'image/jpg'});
            saveAs(file, 'image.jpg');
           
        })

    }
    const deleteCurrentDocument = (item) => {
        const currentDocument = { page };
        dispatch(openModal({ title: "Confirmation", bodyType: MODAL_BODY_TYPES.CONFIRMATION, extraObject: { message: `Are you sure you want to delete this Document?`, type: CONFIRMATION_MODAL_CLOSE_TYPES.DOCUMENT_DELETE, _id: item._id, data: item } }))
    }

    return (
        <>

            <TitleCard title="Current Documents" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>

                {/* Leads List in table format loaded from slice after api call */}
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>File_Name</th>
                                <th>Created At</th>
                                <th>Status</th>
                                <th>Updated At</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                documents && documents.map((l, k) => {
                                    return (
                                        <tr key={k}>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src="https://gravatar.com/avatar/afa397a0295067ae826bea1d34bc75ad?s=400&d=identicon&r=x" alt="Avatar" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{l.file_name}</div>
                                                        <div className="text-sm opacity-50">{l.file_type}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{moment(new Date()).add(-5 * (k + 2), 'days').format("DD MMM YY")}</td>
                                            <td>{getDummyStatus(k)}</td>
                                            <td>{l.updatedAt}</td>
                                            <td className="pl-0"><button className="btn btn-square btn-ghost" onClick={(e) => openEditDocumentModal(l, e)}><FolderArrowDownIcon className="w-5" /></button>
                                                <button className="btn btn-square btn-ghost" onClick={() => deleteCurrentDocument(l)}><TrashIcon className="w-5" /></button>
                                                <button className="btn btn-square btn-ghost" onClick={() => deleteCurrentDocument(l)}><EllipsisVerticalIcon className="w-5" /></button></td>
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


export default Documents