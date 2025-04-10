'use client';

import { Pencil } from 'lucide-react';

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        {/* Profile Image */}
        <div className="relative w-32 h-32">
          <img
            src="/images/user-placeholder.jpg"
            alt="User profile"
            className="w-full h-full object-cover rounded-full border-4 border-green-600"
          />
          <button className="absolute bottom-0 right-0 bg-green-600 hover:bg-green-700 text-white p-1 rounded-full">
            <Pencil size={16} />
          </button>
        </div>

        {/* Profile Info */}
        <div className="text-center sm:text-left flex-1">
          <h2 className="text-2xl font-bold text-gray-800">Aliyu Abubakar</h2>
          <p className="text-green-600 font-medium">Premium Member</p>
          <p className="text-gray-500 mt-2">aliyu@arewarealestate.ng</p>
          <p className="text-gray-500">+234 801 234 5678</p>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        {[
          { label: 'Properties', value: 8 },
          { label: 'Favorites', value: 14 },
          { label: 'Messages', value: 3 },
          { label: 'Visits', value: 27 },
        ].map((item) => (
          <div key={item.label} className="bg-gray-100 rounded-xl p-4">
            <p className="text-xl font-bold text-green-600">{item.value}</p>
            <p className="text-sm text-gray-500">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
