import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../components/Cards/TitleCard"
import InputText from '../../components/Input/InputText'
import TextAreaInput from '../../components/Input/TextAreaInput'
import ToogleInput from '../../components/Input/ToogleInput'
import { updateUser } from '../../redux/features/auth/authService'
import { resetState } from '../../redux/features/auth/authSlice'
import FormInput from '../../components/form/FormInput'
import { toast } from 'react-toastify';
import Loading from '../../components/shared/Loading';
function ProfileSettings() {

    const { user, error, success, failure, loading } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        if (success) {
            toast.success("Profile Updated Successfull!!!");
            dispatch(resetState())
        }
        else if (failure) {
            toast.error(error);
            dispatch(resetState())
        }
    }, [user, loading, success, failure, error]);

    const [name, setName] = useState(user?.name)
    const [email, setEmail] = useState(user?.email)
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [partnerName, setPartnerName] = useState(user?.partner?.name);
    const [partnerLogo, setPartnerLogo] = useState(user?.partner?.logo);
    const [partnerDescription, setPartnerDescription] = useState(user?.partner?.description);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !email || (password !== confirmPassword)) {
            toast.error("Please provide all values!");
            return
        }
        const currentUser = { name, email, password, partnerName, partnerLogo, partnerDescription };
        dispatch(updateUser({ currentUser }))
    }

    const handleReset = (e) => {
        e.preventDefault();
    };

    const [activeButtonIndex, setActiveButtonIndex] = useState(0);


    if (loading) return <Loading />;

    return (
        <>


            <TitleCard title={<><a className={activeButtonIndex === 0 ? "btn hover:bg-blue-500 bg-blue-500 text-[#ffff]" : "btn bg-white"} onClick={() => setActiveButtonIndex(0)}>User Profile</a><span>&nbsp;&nbsp;</span><a className={activeButtonIndex === 1 ? "btn bg-blue-500 hover:bg-blue-500 text-[#ffff]" : "btn bg-white"} onClick={() => setActiveButtonIndex(1)}>Partner Profile</a></>} topMargin="mt-2">

                {activeButtonIndex === 0 ? (<><div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormInput type='text' label='name' name='name' value={name} handleChange={(e) => setName(e.target.value)} />
                    <FormInput type='email' label='email' name='email' value={email} handleChange={(e) => setEmail(e.target.value)} />
                    <FormInput type='password' label='password' name='password' value={password} handleChange={(e) => setPassword(e.target.value)} />
                    <FormInput type='password' label='confirm Password' name='confirmPassword' value={confirmPassword} handleChange={(e) => setConfirmPassword(e.target.value)} />
                    <TextAreaInput labelTitle="About" defaultValue="Doing what I love, part time traveller" />
                </div>                    <div className="divider" ></div>

                    <div className="mt-8"><button className="btn btn-primary float-right" onClick={handleSubmit}>Update</button></div></>

                ) : (<><div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormInput type='text' label='Partner Name' name='partnerName' value={partnerName} handleChange={(e) => setPartnerName(e.target.value)} />
                    <FormInput type='text' label='Partner Logo' name='partnerLogo' value={partnerLogo} handleChange={(e) => setPartnerLogo(e.target.value)} />
                    <FormInput type='text' label='Partner Description' name='partnerDescription' value={partnerDescription} handleChange={(e) => setPartnerDescription(e.target.value)} />
                    <TextAreaInput labelTitle="About" defaultValue="Doing what I love, part time traveller" />
                </div>
                    <div className="divider" ></div>

                    <div className="mt-16"><button className="btn btn-primary float-right" onClick={handleSubmit}>Update</button></div></>)}

            </TitleCard>
        </>
    )
}


export default ProfileSettings