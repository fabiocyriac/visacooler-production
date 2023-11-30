import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ErrorText from '../../features/common/components/Typography/ErrorText'
import InputText from '../../features/common/components/Input/InputText'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/features/auth/authService';
import { resetState } from '../../redux/features/auth/authSlice';


function Login() {

    const INITIAL_LOGIN_OBJ = {
        password: "",
        email: ""
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, error, loading, success, failure } = useSelector(state => state.auth)

    const [errorMessage, setErrorMessage] = useState("")
    const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ)

    const submitForm = (e) => {
        e.preventDefault()
        setErrorMessage("")
        const { email, password } = loginObj;
        if (email.trim() === "") return setErrorMessage("Email Id is required! (use any value)")
        if (password.trim() === "") return setErrorMessage("Password is required! (use any value)")
        else {
            const currentUser = { email, password };
            dispatch(loginUser({ currentUser }))
        }
    }

    useEffect(() => {
        if (success && user) {
            navigate('/app/welcome');
            dispatch(resetState())
        }
        else if (failure) {
            dispatch(resetState())
            return setErrorMessage("Login Failed")
        }
    }, [user, loading, success, failure, error]);

    const updateFormValue = ({ updateType, value }) => {
        setErrorMessage("")
        setLoginObj({ ...loginObj, [updateType]: value })
    }

    return (
        <div className="min-h-screen bg-base-200 flex items-center">
            <div className="card mx-auto w-full max-w-md  shadow-xl">
                <div className="grid  md:grid-cols-1 grid-cols-1  bg-base-100 rounded-xl">

                    <div className='py-24 px-10'>
                        <h2 className='text-2xl font-semibold mb-2 text-center'>Login</h2>
                        <form onSubmit={(e) => submitForm(e)}>

                            <div className="mb-4">
                                <InputText type="email" defaultValue={loginObj.email} updateType="email" containerStyle="mt-4" labelTitle="Email Id" updateFormValue={updateFormValue} />
                                <InputText defaultValue={loginObj.password} type="password" updateType="password" containerStyle="mt-4" labelTitle="Password" updateFormValue={updateFormValue} />
                            </div>

                            <div className='text-right text-primary'><Link to="/forgot-password"><span className="text-sm  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Forgot Password?</span></Link>
                            </div>
                            <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
                            <button type="submit" className={"btn mt-2 w-full btn-primary" + (loading ? " loading" : "")}>Login</button>
                            <div className='text-center mt-4'>Don't have an account yet? <Link to="/register"><span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Register</span></Link></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login