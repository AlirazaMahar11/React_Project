import { Box, Typography } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"
import { InputField } from "../Components/InputField"
import { Custom_Button } from "../Components/Button"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Config/Firebase'
import swal from "sweetalert"

export const Login = () => {
    const [Data, setData] = useState({})
    console.log(Data);
    const ChangeHandle = (e) => {
        const { id, value } = e.target
        setData({ ...Data, [id]: value })
    }
    // firebase Authentication
    const SubmitData = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, Data.email, Data.password)
            console.log("User", userCredential);
            swal({
                title: "Good job!",
                text: "Are You Logged In",
                icon: "success"
              });
            } catch (error) {
            swal("Oops!", "Wrong Email & Password ", "error");
        }
    }
    return (
        <>
            <Box
                component='form'
                onSubmit={SubmitData}>
                <div className="w-[100%] h-[100vh] items-center bg-red-500 pt-32 px-5">
                    <div className="max-w-sm h-[400px] m-auto bg-white rounded-xl">
                        <Typography sx={{ textAlign: 'center', fontSize: '50px', fontFamily: 'fantasy' }}>
                            Login
                        </Typography>
                        <div className="mt-10 mx-5 space-y-5">
                            <InputField type='email' label='Enter Email' required={true} id='email' onChange={ChangeHandle} />
                            <InputField type='password' label='Enter Password' required={true} onChange={ChangeHandle} id='password' />
                        </div>
                        <div className="mx-5 my-2 mt-5 flex space-x-3">
                            <Custom_Button className="w-[80%]" sx={{':hover': { backgroundColor: 'red', fontWeight: 'bold' }, backgroundColor: '#B80000'}} variant='contained' type='Submit'>
                                Submit
                            </Custom_Button>
                            <Link to='/Home'>
                            <Custom_Button sx={{':hover': { backgroundColor: 'red', fontWeight: 'bold', color:'white' }, color:'white', backgroundColor: '#B80000'}}>
                                Back
                            </Custom_Button>
                            </Link>
                        </div>
                        <div className="text-center cursor-pointer">
                            Don`t have Account <Link to='/signUp' className="text-red-500 underline">SignUp Now</Link> &nbsp;
                        </div>
                    </div>
                </div>
            </Box>
        </>
    )
}
