import { Quote } from 'lucide-react'

const TestimonialsCard = ({ testimonial }) => {
  return (
    <div className='rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg shadow-gray-100 dark:shadow-white/5 p-6 bg-white dark:bg-gray-900 flex flex-col gap-4 max-w-sm'>

      <Quote className='text-indigo-600 dark:text-indigo-300 fill-indigo-600 dark:fill-indigo-300' size={28} />

      <p className='text-sm text-gray-600 dark:text-gray-300'>
        "{testimonial.quote}"
      </p>

      <div className='flex items-center gap-3 mt-2'>
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className='w-10 h-10 rounded-full object-cover'
        />
        <div>
          <h4 className='font-medium text-sm'>{testimonial.name}</h4>
          <p className='text-xs text-gray-500 dark:text-gray-400'>{testimonial.title}</p>
        </div>
      </div>

    </div>
  )
}

export default TestimonialsCard