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

    function searchTableContent(value) {
        let id = parseInt(value)
        console.log(value)
        axios.get(`http://localhost:8082/Emplyoee_Payroll/Find_Employee_Data?id=${id}`)
        .then(responce => console.log(responce.data.obj))
        .catch(error => console.log(error))

    }

    function searchTable() {
        var input, filter, found, table, tr, td, i, j;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td");
            for (j = 0; j < td.length; j++) {
                if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                    found = true;
                }
            }
            if (found) {
                tr[i].style.display = "";
                found = false;
            } else {
                tr[i].style.display = "none";
            }
        }
    }

    return (
        <div>         
            <div className="main-content">
            <div className="header-content">
			<div className="emp-detail-text">
				Employee Details
			</div>
            <input type="text" id='myInput' onKeyUp={searchTable} placeholder="Search for names.." title="Type in a name"/>
			<Link to="/addEmp" className="add-button"> + Add User </Link>
            </div>
        <div className="table-wrapper">
            <table className="fl-table" id='myTable'>
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