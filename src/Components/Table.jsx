import axios from 'axios';
import './Table.css';
import Delete from '../Assets/delete-black-18dp.svg';
import Update from '../Assets/icons8-edit-18.svg';
import mainPage from '../Assets/mainHeader.PNG';

import { Link } from 'react-router-dom';

import React, { useEffect, useState } from 'react';

function Table() {
    const [Employees, setEmployees] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8082/Emplyoee_Payroll/Show_All_Emp_Data")
        .then(responce => {
            console.log(responce.data.obj)
            const Employees = responce.data.obj;
            setEmployees(Employees)
        console.log(Employees)})
        .catch(error => console.log(error))
    }, [])

    function deleteEmployees(empId) {
        let id = parseInt(empId)
        axios.delete(`http://localhost:8082/Emplyoee_Payroll/Delete_Employee_Data?id=${id}`)
        .then(responce => alert(responce.data.message))
        .catch(error => console.log(error))
        window.location.reload();
    }

    function updateEmployees(empId) {
        let id = parseInt(empId)
        axios.put(`http://localhost:8082/Emplyoee_Payroll/Update_Employee_Data?id=${id}`)
        .then(responce => alert(responce.data.message))
        .catch(error => console.log(error))
    }

    return (
        <div>         
            <div className="main-content">
            <div className="header-content">
			<div className="emp-detail-text">
				Employee Details
			</div>
			<Link to="/addEmp" className="add-button"> + Add User </Link>
            </div>
        <div className="table-wrapper">
            <table className="fl-table">
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>GENDER</th>
                        <th>DEPARTMENT</th>
                        <th>SALARY</th>
                        <th>START DATE</th>
                        <th>ACTION</th>
                    </tr>
                    </thead>    
                    <tbody> {
                        Employees.map((emp) => (
                            <tr >
                                <td>{emp.name}</td>
                                <td>{emp.gender}</td>
                                <td>{emp.department}</td>
                                <td>{emp.salary}</td>
                                <td>{emp.startDate}</td>
                                <td>
                                    <img src={Delete} className= "delete-button" alt="delete"  onClick={() => deleteEmployees(emp.id)}/>
                                    &#160; &#160;&#160; &#160;
                                    <Link to="/addEmp">
                                    <img src={Update} className= "update-button" alt="update" onClick={() => updateEmployees(emp.id)}/>
                                    </Link>
                                </td>
                            </tr>
                        ))} 
                    </tbody>
            </table>
            </div>
            </div>
            </div>
            
    )
}


export default Table;