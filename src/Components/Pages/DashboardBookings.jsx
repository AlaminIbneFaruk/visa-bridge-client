
import { motion } from 'framer-motion';

const bookings = [
  { id: 1, package: 'City Tour', guide: 'Alice', date: '2025-05-15', price: '$100', status: 'Accepted' },
  { id: 2, package: 'Mountain Adventure', guide: 'Bob', date: '2025-05-20', price: '$300', status: 'In Review' },
  { id: 3, package: 'Beach Relaxation', guide: 'Charlie', date: '2025-06-01', price: '$500', status: 'Rejected' },
  { id: 4, package: 'Safari Adventure', guide: 'Diana', date: '2025-06-05', price: '$250', status: 'Accepted' },
  { id: 5, package: 'Desert Exploration', guide: 'Ethan', date: '2025-06-10', price: '$400', status: 'In Review' },
  { id: 6, package: 'Cultural Heritage', guide: 'Frank', date: '2025-06-15', price: '$150', status: 'Accepted' },
  { id: 7, package: 'Historic Landmarks', guide: 'Grace', date: '2025-06-20', price: '$200', status: 'Rejected' },
  { id: 8, package: 'Jungle Trekking', guide: 'Harry', date: '2025-06-25', price: '$350', status: 'Accepted' },
  { id: 9, package: 'River Cruise', guide: 'Ivy', date: '2025-06-30', price: '$180', status: 'In Review' },
];

const DashboardBookings = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Booking Management</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="bg-base-100">
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
              <motion.tr key={booking.id} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="hover:bg-neutral-content hover:text-neutral">
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
