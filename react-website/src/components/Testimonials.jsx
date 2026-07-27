import TitleServices from './TitleServices'
import TestimonialsCard from './TestimonialsCard'
import { testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <div id='testimonials' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

      <TitleServices title='What our clients say' desc='' />

      <div className='flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {testimonialsData.map((testimonial, index) => (
          <TestimonialsCard key={index} testimonial={testimonial} />
        ))}
      </div>

    </div>
  )
}

export default Testimonials