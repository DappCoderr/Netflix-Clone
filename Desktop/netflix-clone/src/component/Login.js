import React,{useState} from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg'
            alt='logo'/>
        </div>
        <form className='w-3/12 absolute p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white rounded-md'>
            <h1 className='font-bold text-3xl py-4'>{ isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input type='text' placeholder='Name' className='p-4 my-4 w-full bg-gray-700 rounded-sm'/>}
            <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 rounded-sm'/>
            <input type='text' placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-sm'/>
            <button className='bg-red-700 w-full p-4 my-6 rounded-sm'>{ isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now." : "Already Registered? Sign In Now."}</p>
        </form>
    </div>
  )
}

export default Login