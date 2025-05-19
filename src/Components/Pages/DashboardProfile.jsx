import { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AuthContext } from '../../provider/AuthProvider';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const DashboardProfile = () => {
  const { user } = useContext(AuthContext);
  const [profileData, setProfileData] = useState({});
  const db = getFirestore();

  useEffect(() => {
    const fetchProfileData = async () => {
      if (user) {
        try {
          const docRef = doc(db, 'users', user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setProfileData(docSnap.data());
          }
        } catch (error) {
          console.error('Error fetching profile data:', error);
        }
      }
    };
    fetchProfileData();
  }, [user, db]);

  return (
    <div className="p-6 card border-2 border-neutral-content">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.4 }}
        className="card w-full bg-base-200 shadow-xl p-6">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold">Profile</h2>
          <p className="text-lg">Name: {profileData?.fullName || user?.displayName || 'user'}</p>
          <p className="text-lg">Email: {profileData?.email || user?.email || 'user@example.com'}</p>
          <p className="text-lg">Role: {profileData?.role || 'User'}</p>
          <p className="text-lg">Date of Birth: {profileData?.dob || 'Not available'}</p>
          <p className="text-lg">Nationality: {profileData?.nationality || 'Not available'}</p>
          <p className="text-lg">Passport Number: {profileData?.passportNumber || 'Not available'}</p>
          <p className="text-lg">Address: {profileData?.address || 'Not available'}</p>
          <p className="text-lg">Phone: {profileData?.phone || 'Not available'}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardProfile;
