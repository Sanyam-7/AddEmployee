import React, { useState } from "react";
import EmployeeList from "./Components/Employee";
import AddEmployeeForm from "./Components/AddEmployee";
import styles from './App.module.css'
const App = () => {
  const [users, setUsers] = useState([]);

  const handleAddEmployee = newUser => {
    setUsers(prevUsers => [...prevUsers, newUser]);
  };

  return (
    <div>
      <div className={styles.main} >
        <div className={styles.employees}  >
          <EmployeeList  users={users}  />
        </div>
        <div className={styles.AddForm}>
          <AddEmployeeForm onAddEmployee={handleAddEmployee} />
        </div>
      </div>
    </div>
  );
};

export default App;
