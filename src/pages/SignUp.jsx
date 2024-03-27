import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"
// import { useEffect } from "react"
import {  icon } from '../assets/pesa'
import Head from "../components/Head"
import Footer  from "../sections/Footer"

const SignUp = () => {

  const {
    isRegistrationLoading,
    RegistrationError,
    registerUser,
    RegistrationInfo,
    updateRegistrationInfo,
  } = useContext(AuthContext)


  // useEffect(() => {
  //   if (RegistrationError?.error == true) {
  //     alert(RegistrationError.message)
  //   }

  // }, [])


  return (

    <div id="signUP" className='text-white  flex flex-col justify-center items-center dark:dark:bg-[#171b3f] bg-red-400 bg-cover' style={{ "backgroundImage": "url('../src/assets/pesa/bg2.jpg')" }}>
       <Head/>
      <div className='bg-slate-800 mt-24 lg:mt-32 border-slate-400 rounded-md p-8 shadow-lg backdrop-blur-md bg-opacity-60 relative'>
        <img className="border-slate-400 my-3 py-3" width={80} height={80} src={icon} alt="logo image" />
        <h1 className='text-4xl text-left font-bold text-white mb-6'>Welcome To PesaBuddy</h1>

        <form onSubmit={registerUser}>

          <div className='relative my-4 ' >
            <label htmlFor="">Email</label>
            <input type="text" placeholder='' className='block py-3  w-full px-3 text-sm text-white bg-transparent  border-b-2 border-0 border-red-400 appearance-none dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' onChange={(e) => updateRegistrationInfo({ ...RegistrationInfo, email: e.target.value })} />
          </div>

          <div className='relative my-4 ' >
            <label htmlFor="">Full Name</label>
            <input type="text" placeholder='' className='block py-3  w-full px-3 text-sm text-white bg-transparent border-b-2 border-0 border-red-400 appearance-none dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' onChange={(e) => updateRegistrationInfo({ ...RegistrationInfo, name: e.target.value })} />

            {/* <label className='absolute text-sm  text-white duration-300 transform-y-6  scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-950 peer-focus:dark:text-blue-950 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6' htmlFor="name">Your Name or Email</label> */}
          </div>

          <div className='relative my-4 ' >
            <label htmlFor="">Phone Number</label>
            <input type="telephone" placeholder='' className='block py-3  w-full px-3 text-sm text-white bg-transparent border-b-2 border-0 border-red-400 appearance-none dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' onChange={(e) => updateRegistrationInfo({ ...RegistrationInfo, phone: e.target.value })} />
          </div>

          <div className='relative my-4'>
            <label htmlFor=""> Password</label>
            <input type="password" className='block py-3  w-full px-3 text-sm text-white bg-transparent border-b-2 border-0 border-red-400 appearance-none dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' onChange={(e) => updateRegistrationInfo({ ...RegistrationInfo, password: e.target.value })} />
            {/* <label className='absolute text-sm  text-white duration-300 transform-y-6  scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-950 peer-focus:dark:text-blue-950 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6' htmlFor="password">Your Password</label> */}
          </div>

          <div className='relative my-4'>
            <label htmlFor=""> Confirm Password</label>
            <input type="password" className='block py-3  w-full px-3 text-sm text-white bg-transparent border-b-2 border-0 border-red-400 appearance-none dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' onChange={(e) => updateRegistrationInfo({ ...RegistrationInfo, passwordConfirmation: e.target.value })} />
          </div>

          {/* <div className='flex justify-between items-center'>
            <div className=' flex gap-2 items-center '>
              <input type="checkbox" name='' id='' />
              <label htmlFor="">Remember me</label>
            </div>
            <Link className='text-red-400'>Forgot password?</Link> 
            <a className='text-red-400 hover:text-slate-200' href='' >Forgot password?</a>
          </div> */}

          <Link to='/dashboard'>
            <button type='submit' className="flex justify-center items-center py-4 px-4 font-monserrat text-[18px] leading-none rounded-full bg-white text-red-400 w-full  my-6 mr-4 hover:bg-red-400 hover:text-white duration-300 transition-colors"

            >
              {isRegistrationLoading ? 'Loading...' : "SignUp"}
            </button>
          </Link>



          <div className='text-center'>
            <span className='m-4'>Already have an account?
              <Link to="/login" className='text-red-400 hover:text-slate-200'> Login.</Link> </span>
          </div>


        </form>

      </div>
      <section className="padding-x padding-t mt-10 w-full pb-8 bg-black dark:bg-[rgb(23,27,63)]">
     <Footer />
   </section>

    </div>
  )
}

export default SignUp