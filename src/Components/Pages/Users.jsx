import { motion } from 'framer-motion';

const Users = () => {
  const users = [
    { id: 1, name: 'John Doe', role: 'Admin', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', role: 'Tour Guide', email: 'jane@example.com' },
    { id: 3, name: 'Sam Brown', role: 'Tourist', email: 'sam@example.com' }
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="bg-gray-100">
              <th>ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <motion.tr key={user.id} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="hover:bg-gray-50">
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.email}</td>
                <td>
                  <button className="btn btn-xs mr-2">View</button>
                  <button className="btn btn-xs btn-warning mr-2">Edit</button>
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

export default Users;
