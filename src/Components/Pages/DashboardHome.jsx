import { motion } from 'framer-motion';

const stats = [
  { label: 'Total Bookings', value: 15 },
  { label: 'Total Stories', value: 8 },
  { label: 'Upcoming Tours', value: 3 },
  { label: 'Applied as Guide', value: 'Yes' }
];

const UserDashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="card bg-base-200 shadow-lg shadow-neutral-content p-4">
            <h3 className="text-lg font-semibold">{stat.label}</h3>
            <p className="text-2xl font-bold">{stat.value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
