
import { motion } from 'framer-motion';

const comments = [
  { id: 1, user: 'John Doe', text: 'Great tour!', date: '2025-05-14' },
  { id: 2, user: 'Jane Smith', text: 'Amazing experience.', date: '2025-05-13' },
  { id: 3, user: 'David Brown', text: 'Could be better.', date: '2025-05-12' }
];

const DashboardComments = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User Comments</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="bg-gray-100">
              <th>ID</th>
              <th>User</th>
              <th>Comment</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((comment) => (
              <motion.tr key={comment.id} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="hover:bg-gray-50">
                <td>{comment.id}</td>
                <td>{comment.user}</td>
                <td>{comment.text}</td>
                <td>{comment.date}</td>
                <td>
                  <button className="btn btn-xs mr-2">View</button>
                  <button className="btn btn-xs btn-error">Delete</button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardComments;
