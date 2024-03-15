import { Box, Typography } from "@mui/material"
import { InputField } from "../Components/InputField"
import { Custom_Button } from "../Components/Button"
import { Link } from "react-router-dom"
import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Config/Firebase'

export const Signup = () => {
    const [data, setdata] = useState([])

    const ChangeHandle = (e) => {
        const { id, value } = e.target
        setdata({ ...data, [id]: value })
    }
    const SubmitHandle = async (e) => {
        e.preventDefault()
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password)
            console.log("User", userCredential);
            alert("Logged In Successfully")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Box component='form'
            onSubmit={SubmitHandle}>
            <div className="w-[100%] h-[100vh] items-center bg-red-500 pt-10 px-5">
                <div className="max-w-sm h-[650px] m-auto bg-white rounded-xl">
                    <Typography sx={{ textAlign: 'center', fontSize: '50px', fontFamily: 'fantasy' }}>
                        Sign Up
                    </Typography>
                    <div className="mt-10 mx-5 space-y-5">
                        <InputField type='text' label='Enter First Name' id='FirstName' onChange={ChangeHandle} required={true} />
                        <InputField type='text' label='Enter Last Name' id='LastName' onChange={ChangeHandle} required={true} />
                        <InputField type='Group' label='Enter Blood Group' id='Group' onChange={ChangeHandle} required={true} />
                        <InputField type='email' label='Enter Email' id='email' onChange={ChangeHandle} required={true} />
                        <InputField type='password' label='Enter Password' onChange={ChangeHandle} id='password' required={true} />
                    </div>
                    <div className="mx-5 my-2 mt-5 flex space-x-3">
                        <Custom_Button className="w-[80%]" sx={{ ':hover': { backgroundColor: 'red', fontWeight: 'bold' }, backgroundColor: '#B80000' }} variant="contained" type='Submit'>
                            Submit
                        </Custom_Button>
                        <Link to='/Home'>
                            <Custom_Button variant="contained" sx={{ ':hover': { backgroundColor: 'red', fontWeight: 'bold' }, backgroundColor: '#B80000' }}>
                                Back
                            </Custom_Button>
                        </Link>
                    </div>
                    <div className="text-center cursor-pointer">
                        Already have Account <Link to='/' className="text-red-500 underline" >LogIn Now</Link>
                    </div>
                </div>
            </div>
        </Box>
    )
}
