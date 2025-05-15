import { useContext } from 'react';
import { motion } from 'framer-motion';
import { AuthContext } from '../../provider/AuthProvider';

const DashboardProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.4 }}
        className="card bg-base-200 shadow-xl p-4">
        <h2 className="text-2xl font-bold mb-2">Profile</h2>
        <p className="text-lg">Name: {user?.displayName || 'Admin'}</p>
        <p className="text-lg">Email: {user?.email || 'admin@example.com'}</p>
        <p className="text-lg">Role: {user?.role || 'Administrator'}</p>
        <button className="btn btn-primary mt-4">Edit Profile</button>
      </motion.div>
    </div>
  );
};

export default DashboardProfile;
