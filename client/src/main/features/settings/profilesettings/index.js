import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../../features/common/components/Cards/TitleCard"
import { showNotification } from '../../common/headerSlice'
import InputText from '../../../features/common/components/Input/InputText'
import TextAreaInput from '../../../features/common/components/Input/TextAreaInput'
import ToogleInput from '../../../features/common/components/Input/ToogleInput'
import { Tabs, Tab } from '../../../features/common/components/Tabs/Tabs'


function ProfileSettings() {


    const dispatch = useDispatch()

    // Call API to update profile settings changes
    const updateProfile = () => {
        dispatch(showNotification({ message: "Profile Updated", status: 1 }))
    }

    const updateFormValue = ({ updateType, value }) => {
        console.log(updateType)
    }

    return (
        <>
            <div>

                <TitleCard title="Profile" topMargin="mt-2">
                    <Tabs>
                        <Tab label="User Profile">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputText labelTitle="Name" defaultValue="Alex" updateFormValue={updateFormValue} />
                                <InputText labelTitle="Email Id" defaultValue="alex@dashwind.com" updateFormValue={updateFormValue} />
                                <InputText labelTitle="Title" defaultValue="UI/UX Designer" updateFormValue={updateFormValue} />
                                <InputText labelTitle="Place" defaultValue="California" updateFormValue={updateFormValue} />
                                <TextAreaInput labelTitle="About" defaultValue="Doing what I love, part time traveller" updateFormValue={updateFormValue} />
                            </div>
                            <div className="divider" ></div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputText labelTitle="Language" defaultValue="English" updateFormValue={updateFormValue} />
                                <InputText labelTitle="Timezone" defaultValue="IST" updateFormValue={updateFormValue} />
                                <ToogleInput updateType="syncData" labelTitle="Sync Data" defaultValue={true} updateFormValue={updateFormValue} />
                            </div>

                            <div className="mt-16"><button className="btn btn-primary float-right" onClick={() => updateProfile()}>Update</button></div>
                        </Tab>
                        
                        <Tab label="Partner Profile">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputText labelTitle="Language" defaultValue="English" updateFormValue={updateFormValue} />
                                <InputText labelTitle="Timezone" defaultValue="IST" updateFormValue={updateFormValue} />
                                <ToogleInput updateType="syncData" labelTitle="Sync Data" defaultValue={true} updateFormValue={updateFormValue} />
                            </div>

                            <div className="mt-16"><button className="btn btn-primary float-right" onClick={() => updateProfile()}>Update</button></div>
                        </Tab>

                    </Tabs>
                </TitleCard>

            </div>
        </>
    )
}


export default ProfileSettings