import { Box } from '@mui/material'
import '../App.css'
import { Custom_Button } from '../Components/Button'
import { InputField } from '../Components/InputField'
import { useState } from 'react'

export const Form = () => {
  const [formData, setformData] = useState([])

  const DataHandle = (e) => {
    const {id, value} = e.target
    setformData({...formData,[id] : value})
  }
  console.log(formData);

  const SubmitData = (e) => {
    e.preventdefault()
    localStorage.setItem("User Data", formData)
  }
  return (
    <>
      <div className='border-4 mx-20 my-5 py-5'>
        <h1 className='font-bold font-serif text-3xl my-5 text-center'>Blood Donner & Blood Consumer Form</h1>

        <Box component='form'
          onSubmit={SubmitData} className='space-y-10'>
          <div className='flex mx-40 space-x-20'>
            <InputField type='text' label='Enter First Name' onChange={DataHandle} variant='standard' id='FirstName' required={true} />
            <InputField type='text' label='Enter Last Name' variant='standard' id='LastName'
              onChange={DataHandle} required={true} />
            <InputField type='text' label='Enter Blood Group' variant='standard' id='BloodGroup'
              onChange={DataHandle} required={true} />
          </div>

          <div className='flex mx-40 space-x-20'>
            <InputField type='email' label='Enter Email Address' variant='standard' id='email'
              onChange={DataHandle} required={true} />
            <InputField type='number' label='Enter Phone Number' variant='standard' id='Number'
              onChange={DataHandle} required={true} />
            <InputField type='number' label='Enter Your Nic No' variant='standard' id='Nic'
              onChange={DataHandle} required={true} />
          </div>


          <div className='flex mx-40 space-x-20'>
            <div>
              <select id='select' onChange={DataHandle} className='bg-gray-50 border border-red-700 text-red-700 w-[250px] h-10'>
                <option value="Donner">Donner</option>
                <option value="Consumer">Consumer</option>
              </select>
            </div>
            <InputField type='text' label='Enter Country Name' variant='standard' id='Country'
              onChange={DataHandle} required={true} />
            <InputField type='text' label='Enter City Name' variant='standard' id='City' onChange={DataHandle} required={true} />
          </div>
          <div className='flex mx-40 space-x-20'>
            <InputField type='text' label='Enter Address' variant='standard' id='Address' onChange={DataHandle} required={true} />
          </div>
        <div className='flex justify-center'>
          <Custom_Button type='Submit' sx={{ width: '600px', fontSize: '15px', ':hover': { backgroundColor: 'red', fontWeight: 'bold' }, backgroundColor: '#B80000' }} variant="contained">Submit Form</Custom_Button>
        </div>
        </Box>
      </div>
    </>
  )
}

