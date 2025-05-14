
import { Helmet } from 'react-helmet';

const Student = () => {
  return (
    <div className='p-4 space-y-6'>
      <Helmet>
        <title>Student Visa Details</title>
        <meta name='description' content='Detailed information on student visa requirements, application process, fees, and FAQs.' />
      </Helmet>

      <h1 className='text-3xl font-bold mb-4'>Student Visa Details</h1>

      <section className='bg-white shadow rounded-lg p-6'>
        <h2 className='text-xl font-semibold'>Visa Requirements</h2>
        <p>To apply for a student visa, you will need to provide proof of admission, passport, financial documents, and health insurance.</p>
      </section>

      <section className='bg-white shadow rounded-lg p-6'>
        <h2 className='text-xl font-semibold'>Application Process</h2>
        <p>Apply online via the official immigration website, submit necessary documents, and schedule an interview.</p>
      </section>

      <section className='bg-white shadow rounded-lg p-6'>
        <h2 className='text-xl font-semibold'>Fees and Payment</h2>
        <p>The visa application fee varies by country. Please check the official website for accurate information.</p>
      </section>

      <section className='bg-white shadow rounded-lg p-6'>
        <h2 className='text-xl font-semibold'>FAQs</h2>
        <p>For more information, visit the official government website or contact your local embassy.</p>
      </section>
    </div>
  );
};

export default Student;
