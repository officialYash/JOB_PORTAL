// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroupItem } from '../ui/radio-group'
import { RadioGroup } from '@radix-ui/react-radio-group'

const Signup = () => {
  return (
    <div>
      <Navbar />
      <div className=' flex items-center justify-center max-w-7xl mx-auto'>
        <form action="" className='w-1/2 border border-gray-200 rounded-md p-4 my-10 '>
          <h1 className='font-bold text-xl mb-5'>Sign Up</h1>
          <div className='my-2'>
            <Label>Full Name</Label>
            <Input type='text' placeholder='Arora' />
          </div>
          <div className='my-2'>
            <Label>Email</Label>
            <Input type='email' placeholder='Arora@gmail.com' />
          </div>
          <div className='my-2'>
            <Label>Phone no</Label>
            <Input type='text' placeholder='Arora' />
          </div>
          <div className='my-2'>
            <Label>Password</Label>
            <Input type='password' placeholder='Arora' />
          </div>
          <div className='flex items-center justify-between'>
          <RadioGroup defaultValue="confortable">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="deafult" id="r1" />
    <Label htmlFor="r1">Student</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="comfortable" id="r2" />
    <Label htmlFor="r2">Recruiter</Label>
  </div>
</RadioGroup>

          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup