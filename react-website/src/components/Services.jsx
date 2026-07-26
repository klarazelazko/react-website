import React from 'react'
import assets from '../assets/assets'
import TitleServices from './TitleServices'
import ServicesCard from './ServicesCard'
import { PencilSparkles, SplinePointer, CodeXml, Layers } from 'lucide-react';

const Services = () => {

     //dane do kart usług: tytuł, opis i ikona (z lucide-react)
    const services_data = [
        {
            title: 'Product Strategy',
            description: 'We help you define the right strategy and roadmap to achieve your goals.',
            icon: PencilSparkles
        },
        {
            title: 'UI/UX Design',
            description: 'Beautiful, intuitive interfaces that provide meaningful experience.',
            icon: SplinePointer
        },
        {
            title: 'Development',
            description: 'Scalable and reliable solutions built with modern technologies.',
            icon: CodeXml
        },
        {
            title: 'Design Systems',
            description: 'Consistent design systems that ensure clarity and accelerate development.',
            icon: Layers
        },
    ]

    return (
        <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
            
            {/* blob w tle */}
            <div className='absolute top-10 left-20 -z-10 w-125 h-125 bg-[#dfa4ff]/20 rounded-full blur-3xl' />
    
            <TitleServices title='What we do?' desc={'We offer end-to-end services to bring your ideas to life'} />

            {/* siatka kart: pod sobą na mobile, 4 kolumny od md */}
            <div className='flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                {services_data.map((service, index) => (
                    <ServicesCard key={index} service={service} index={index} />
                ))}
            </div>
        </div>
    )
}

export default Services