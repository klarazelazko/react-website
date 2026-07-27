import assets from '../assets/assets'
import { ArrowRight } from 'lucide-react'

const FeaturedWork = () => {

  const work_data = [
    {
      title: 'Fintech Dashboard',
      category: 'Web application',
      image: assets.work_dashboard,
    },
    {
      title: 'Fitness App',
      category: 'Mobile application',
      image: assets.work_mobile,
    }
  ]

  return (
    <div id='featured-work' className='px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center'>

        {/* Lewa kolumna */}
        <div className='flex flex-col gap-3 sm:col-span-2 lg:col-span-1'>
          <h2 className='text-3xl sm:text-4xl font-semibold'>Featured work</h2>
          <p className='text-gray-500 dark:text-white/60'>
            We build digital products that make an impact.
          </p>
          <a href='#' className='flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-medium hover:gap-2 transition-all'>
            View all projects <ArrowRight size={16} />
          </a>
        </div>

        {/* Karty projektów */}
        {work_data.map((work, index) => (
          <div key={index} className='rounded-2xl overflow-hidden bg-indigo-50 dark:bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl'>
            <div className='p-6'>
              <img src={work.image} alt={work.title} className='w-full' />
            </div>
            <div className='flex items-center justify-between bg-white dark:bg-gray-900 px-5 py-4'>
              <div>
                <h3 className='font-medium'>{work.title}</h3>
                <p className='text-sm text-gray-500 dark:text-white/60'>{work.category}</p>
              </div>
              <a href='#' className='flex items-center gap-1 text-sm text-indigo-600 dark:text-indigo-400 hover:gap-2 transition-all whitespace-nowrap'>
                View case study <ArrowRight size={14} />
              </a>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default FeaturedWork