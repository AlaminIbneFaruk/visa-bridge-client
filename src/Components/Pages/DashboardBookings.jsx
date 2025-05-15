
import { motion } from 'framer-motion';

const bookings = [
  { id: 1, package: 'City Tour', guide: 'Alice', date: '2025-05-15', price: '$100', status: 'Accepted' },
  { id: 2, package: 'Mountain Adventure', guide: 'Bob', date: '2025-05-20', price: '$300', status: 'In Review' },
  { id: 3, package: 'Beach Relaxation', guide: 'Charlie', date: '2025-06-01', price: '$500', status: 'Rejected' }
];

const DashboardBookings = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Booking Management</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="bg-gray-100">
              <th>ID</th>
              <th>Package</th>
              <th>Guide</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <motion.tr key={booking.id} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="hover:bg-gray-50">
                <td>{booking.id}</td>
                <td>{booking.package}</td>
                <td>{booking.guide}</td>
                <td>{booking.date}</td>
                <td>{booking.price}</td>
                <td>
                  <span className={`badge ${booking.status === 'Accepted' ? 'badge-success' : booking.status === 'Rejected' ? 'badge-error' : 'badge-warning'}`}>{booking.status}</span>
                </td>
                <td>
                  <button className="btn btn-xs mr-2">View</button>
                  <button className="btn btn-xs btn-error">Cancel</button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardBookings;
