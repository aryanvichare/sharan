import React from "react";

const Features = () => {
  return (
    <section id='features' className='py-20 bg-white'>
      <div className='flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12'>
        <div className='relative'>
          <h2 className='w-full text-primary text-3xl font-bold text-center sm:text-4xl md:text-5xl'>
            Features
          </h2>
          <p className='font-poppins w-full py-8 mx-auto -mt-2 text-lg text-center text-gray-700 intro sm:max-w-3xl'>
            Explore the features we packed into Sharan to provide relief
            services to refugees
          </p>
        </div>
        <div className='flex flex-col mb-8 animated fadeIn sm:flex-row'>
          <div className='flex items-center mb-8 sm:w-1/2 md:w-5/12'>
            <img src='images/feature-1.png' alt='Feature 1' />
          </div>
          <div className='flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16'>
            <p className='mb-2 text-sm font-semibold leading-none text-left text-primary uppercase'>
              Finding Matches
            </p>
            <h3 className='mt-2 text-2xl sm:text-left md:text-4xl'>
              Find Jobs & Shelters
            </h3>
            <p className='font-poppins mt-5 text-lg text-gray-700 text md:text-left'>
              Based on your profile – skillset, socioeconomic background, etc –
              we match relevant jobs and shelters that meet your needs.
            </p>
          </div>
        </div>
        <div className='flex flex-col mb-8 animated fadeIn sm:flex-row'>
          <div className='flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last'>
            <img src='images/feature-2.png' alt='Feature 2' />
          </div>
          <div className='flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16'>
            <p className='mb-2 text-sm font-semibold leading-none text-left text-primary uppercase'>
              User Privacy
            </p>
            <h3 className='mt-2 text-2xl sm:text-left md:text-4xl'>
              Facial Recognition
            </h3>
            <p className='font-poppins mt-5 text-lg text-gray-700 text md:text-left'>
              Sharan uses Facial Recognition technology to securely authenticate
              the refugees. Using this methodology enables Sharan to maintain
              user privacy and anonymity protocols.
            </p>
          </div>
        </div>
        <div className='flex flex-col mb-8 animated fadeIn sm:flex-row'>
          <div className='flex items-center mb-8 sm:w-1/2 md:w-5/12'>
            <img src='images/feature-3-new.png' alt='Feature 3' />
          </div>
          <div className='flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16'>
            <p className='mb-2 text-sm font-semibold leading-none text-left text-primary uppercase'>
              Data Matching
            </p>
            <h3 className='mt-2 text-2xl sm:text-left md:text-4xl'>
              Refugee Data
            </h3>
            <p className='font-poppins mt-5 text-lg text-gray-700 text md:text-left'>
              Sharan heavily uses your data to create the most relevant and
              personalized experience. Not only do was ask for personal details,
              but we also ask for your financial background to tailor potential
              jobs and shelters most appropriate to your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
