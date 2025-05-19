
import { motion } from 'framer-motion';

const Applications = () => {
  const applications = [
    { id: 1, name: 'Michael Lee', experience: '4 years', status: 'Pending' },
    { id: 2, name: 'Sara Kim', experience: '2 years', status: 'Approved' },
    { id: 3, name: 'David Park', experience: '6 years', status: 'Rejected' }
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Guide Applications</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="bg-gray-100">
              <th>ID</th>
              <th>Name</th>
              <th>Experience</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <motion.tr key={app.id} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="hover:bg-gray-50">
                <td>{app.id}</td>
                <td>{app.name}</td>
                <td>{app.experience}</td>
                <td>
                  <span className={`badge ${app.status === 'Approved' ? 'badge-success' : app.status === 'Rejected' ? 'badge-error' : 'badge-warning'}`}>{app.status}</span>
                </td>
                <td>
                  <button className="btn btn-xs btn-info mr-2">Approve</button>
                  <button className="btn btn-xs btn-error">Reject</button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Applications;
