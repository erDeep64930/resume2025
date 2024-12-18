import Heading from '@/app/components/Heading';
import { servicesMenu } from '@/app/constant/serviceMenu';
import Wrapper from '@/app/shared/Wrapper';
import React from 'react';

const ServiceOffer = () => {
  return (
    <Wrapper>
        <Heading heading="Services"/>
        <div className='grid md:grid-cols-3 my-8 gap-5'>
    {
      servicesMenu.map(service => <div key={service.id} className='service-card flex flex-col justify-center items-center p-6 text-center text-gray-500 hover:text-white transition-all duration-300'>
          <div className="text-3xl text-pri m-4">{service.Icon}</div>
          <h6 className='text-2xl mb-4 font-rye'>{service.name}</h6>
          <p className='text-base font-meri text-gradient'>{service.description}</p>
      </div>)
    }
    </div>
      
    </Wrapper>
  );
}

export default ServiceOffer;
