import React from 'react';

const ServicesCard = ({ service, index }) => {

    const Icon = service.icon;

    return (
        //pojedyncza karta usługi: obramowanie, zaokrąglone rogi, podświetlenie po najechaniu
        <div className='relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-[#1000a9] shadow-2xl shadow-gray-100 dark:shadow-white/10 hover:shadow-indigo-200 dark:hover:shadow-indigo-900/40 transition-all duration-300'>

            {/* biały box z treścią karty: ikona + tytuł + opis, ułożone w kolumnie */}
            <div className='flex flex-col items-start gap-3 p-8 rounded-[10px] bg-white dark:bg-gray-900 relative'>
                
                <div className='p-3 bg-indigo-100 dark:bg-indigo-950 rounded-full'>
                    <Icon size={24} className='text-indigo-600 dark:text-indigo-300' />
                </div>
                <h3 className='font-bold text-lg mt-2'>{service.title}</h3>
                <p className='text-sm text-gray-500 dark:text-gray-400'>{service.description}</p>
            </div>

        </div>
    )
}

export default ServicesCard