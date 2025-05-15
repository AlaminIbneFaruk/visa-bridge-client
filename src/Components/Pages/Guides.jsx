
import { motion } from 'framer-motion';

const Guides = () => {
  const guides = [
    { id: 1, name: 'Alice Johnson', experience: '5 years', email: 'alice@example.com' },
    { id: 2, name: 'Bob Williams', experience: '3 years', email: 'bob@example.com' },
    { id: 3, name: 'Charlie Smith', experience: '7 years', email: 'charlie@example.com' }
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Tour Guides</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="bg-gray-100">
              <th>ID</th>
              <th>Name</th>
              <th>Experience</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {guides.map((guide) => (
              <motion.tr key={guide.id} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="hover:bg-gray-50">
                <td>{guide.id}</td>
                <td>{guide.name}</td>
                <td>{guide.experience}</td>
                <td>{guide.email}</td>
                <td>
                  <button className="btn btn-xs mr-2">View</button>
                  <button className="btn btn-xs btn-warning">Message</button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Guides;
