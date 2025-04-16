import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserMd, FaHeadset, FaKeyboard } from 'react-icons/fa';
import './helper.css';

const Contents = () => {
  const [user, setUser] = useState('');

  useEffect(() => {
    let user = localStorage.getItem('user') || 'Admin';
    setUser(user.split('+')[0]);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Welcome {user}</h2>
      <p className="mb-4">This is admin home</p>
      <div className="card-container">
        <Link to="/admin/doctor" className="card doctor-card">
          <FaUserMd className="card-icon" />
          <h3 className="text-lg font-semibold">Doctor</h3>
          <p>Manage doctor profiles</p>
        </Link>
        <Link to="/admin/fdo" className="card front-desk-card">
          <FaHeadset className="card-icon" />
          <h3 className="text-lg font-semibold">Front Desk</h3>
          <p>Manage front desk operations</p>
        </Link>
        <Link to="/admin/deo" className="card data-entry-card">
          <FaKeyboard className="card-icon" />
          <h3 className="text-lg font-semibold">Data Entry</h3>
          <p>Manage data entry tasks</p>
        </Link>
      </div>
    </div>
  );
};

export default Contents;