import React from 'react';
import styles from './Employee.module.css';
import { CiUser } from "react-icons/ci";

const EmployeeList = ({ users }) => {
  return (
    <div>
      <h2>User Listing</h2>
      <ul className={styles.employeeList}>
        {users.map(user => (
          <li key={user.id} className={styles.listItem}>
            <CiUser className={styles.userIcon} /> {/* CiUser icon */}
            <div className={styles.userInfo}>
              <p>Name: {user.firstName} {user.lastName}</p>
              <p>Age: {user.age}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
