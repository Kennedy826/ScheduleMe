import ReviewCard from '../components/ReviewCard'
import {reviews} from '../constants/index'

const Reviews = () => {
  return (
    <section className='max-container'>
      <h2 className='text-center text-4xl font-bold font-palanquin'>What Our <span className='text-coral-red'>Custormers</span> Say?</h2>
      <p className='info-text dark:text-white m-auto mt-4 max-w-lg text-center '>Hear genuine stories from our satisfied cuatomers about their experience with us.</p>

      <div className=' mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review) =>(
          <ReviewCard 
          key={review.customerName}
          imgURL={review.imgURL}
          customerName = {review.customerName}
          rating = {review.rating}
          feedback = {review.feedback}/>
        ))}
      </div>
    </section>
  )
}

export default Reviews