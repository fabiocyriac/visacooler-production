const AboutPage = () => {
  return (
    <>
      <div className='flex flex-wrap gap-2 sm:gap-x-6 items-left justify-left'>
        <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl'>
          Visa
        </h1>
        <div className='stats bg-primary shadow'>
          <div className='stat'>
            <div className='stat-title text-primary-content text-4xl font-bold tracking-widest'>
              X
            </div>
          </div>
        </div>
      </div>
      <p className='mt-6 text-lg leading-8 max-w-2xl'>
        We employ a uniquely holistic approach, combining an incredibly deep knowledge of immigration laws with an incredibly strategic understanding of our clients’ challenges and requirements. We apply process and technology to deliver more efficient and compliant solutions. And we approach every interaction—with each company and each of their employees — with an unwavering commitment to service.
      </p>
    </>
  );
};
export default AboutPage;
