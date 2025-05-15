
import { motion } from 'framer-motion';

const Packages = () => {
  const packages = [
    { id: 1, name: 'Explore the City', duration: '3 days', price: '$150' },
    { id: 2, name: 'Mountain Adventure', duration: '5 days', price: '$300' },
    { id: 3, name: 'Beach Relaxation', duration: '7 days', price: '$500' }
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Tour Packages</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="bg-gray-100">
              <th>ID</th>
              <th>Name</th>
              <th>Duration</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((pkg) => (
              <motion.tr key={pkg.id} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="hover:bg-gray-50">
                <td>{pkg.id}</td>
                <td>{pkg.name}</td>
                <td>{pkg.duration}</td>
                <td>{pkg.price}</td>
                <td>
                  <button className="btn btn-xs mr-2">Details</button>
                  <button className="btn btn-xs btn-success">Book</button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Packages;
