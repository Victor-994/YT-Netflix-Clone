import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext"


const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {user, signUp} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            await signUp(email, password)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    
  return (
    <>
        <div className='w-full h-screen'>
            <img className='hidden sm:block absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/7cee2527-d2cc-4cc9-99f6-d1375e72d46e/c75b8a2b-a3a4-4e84-8ba0-737578e5f9e6/NG-en-20230103-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='/' />
            <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
            <div className='fixed w-full px-4 py-24 z-50'>
                <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='text-3xl font-bold'>Sign Up</h1>
                        <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                            <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rouded' type='email' placeholder='Email' />
                            <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rouded' type='password' placeholder='Password' autoComplete='current-password' />
                            <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                            <div className='flex justify-between items-center text-sm text-gray-600'>
                                <p><input className='mr-1' type="checkbox" />Remember Me</p>
                                <p>Need help?</p>
                            </div>
                            <p className='py-6'><span className='text-gray-600'>Already subscribed to Netflix?</span>{''} <Link to='/login'>Sign In</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Signup