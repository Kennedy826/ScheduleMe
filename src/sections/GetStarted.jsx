import Button from '../components/Button'

import { arrowRight } from '../assets/icons'

const GetStarted = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10">
        <h3 className='text-4xl font-bold font-palanquin '>Ready to experience the difference? <span className='text-coral-red'>Sign up</span>  now!</h3>
<Button  label='Get Started' iconURL = {arrowRight}/>
    </section>
  )
}

export default GetStarted