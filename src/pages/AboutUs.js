import React from 'react'
//import Nav from '../components/Nav'
import Footer from '../sections/Footer'
import { about, mission } from '../assets/images'
import Head from '../components/Head'

const AboutUs = () => {
  return (
    <div className='padding-t pb-8 dark:bg-[rgb(23,27,63)]'>
      <Head />
      <section className='padding text-center'>
      <div className='flex justify-center gap-3 items-center '>
      <h2 className='text-coral-red font-bold text-4xl '>Who we are</h2>
        <img src= {about}
        width={100}
        height={100}/>
      </div>
        
        <p className='font-palanquin dark:text-white info-text w-[200] text-center '> At PesaBuddy, we are a team passionate about creating financial tools that empower individuals to take control of their  spending and achieve their financial goals.<br/> We believe everyone deserves access to user-friendly and effective solutions for managing their finances, regardless of their background or financial expertise.</p>
      </section>
      
      <section className='padding text-center'>
      <div className='flex justify-center gap-3 items-center '>
      <h2 className='text-coral-red font-bold text-4xl '>Values</h2>
        <img src= {mission}
        width={30}
        height={30}/>
      </div>
        
        <p className='font-palanquin dark:text-white info-text w-[200] text-center '>User-centricity: We design our app with you in mind, prioritizing your needs and preferences. <br />
          Simplicity and ease of use: We believe complex financial tools can be made accessible and user-friendly for everyone. <br />
          Security and privacy: Your financial data is safe with us. We take data security and privacy very seriously.</p>
      </section>

      <section className="padding-x padding-t pb-8 bg-black dark:bg-[rgb(23,27,63)] botom-0 mt-20">
        <Footer />
      </section>
    </div>
  )
}

export default AboutUs