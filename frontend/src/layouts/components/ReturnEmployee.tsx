import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import EmployeeModel from "../../model/EmployeeModel";
import { UpdateEmployee } from "./UpdateEmployee";

export const ReturnEmployee: React.FC<{ employee: EmployeeModel, deleteEmployee: any}> = (props) => {

    const [paidVacation, setPaidVacation] = useState<number>(0);

    useEffect(() => {
        const fetchEmployeeInState = () => {
            props.employee.paidVacation ? setPaidVacation(props.employee.paidVacation) : setPaidVacation(0);
        };
        fetchEmployeeInState();
    },[]);

    async function increaseVacation() {
        const url = `http://localhost:8083/admin/increase/employee/vacation/?id=${props.employee.id}`;
            const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' }
            };

            const updateResponse = await fetch(url, requestOptions);
            if (!updateResponse.ok) {
                throw new Error('Something went wrong!');
            }
            setPaidVacation(paidVacation + 1);
        }

    async function decreaseVacation() {
        const url = `http://localhost:8083/admin/decrease/employee/vacation/?id=${props.employee.id}`;
            const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' }
            };

            const updateResponse = await fetch(url, requestOptions);
            if (!updateResponse.ok) {
                throw new Error('Something went wrong!');
            }
            setPaidVacation(paidVacation - 1);
        }        
    
    async function deleteEmployee() {
        const url = `http://localhost:8083/admin/delete/employee/?id=${props.employee.id}`;
            const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
            };

            const updateResponse = await fetch(url, requestOptions);
            if (!updateResponse.ok) {
                throw new Error('Something went wrong!');
            }
            props.deleteEmployee();
    }

    return (
        <tr>
            <td>{props.employee.name}</td>
            <td>{props.employee.surname}</td>
            <td>{props.employee.department}</td>
            <td>{paidVacation}</td>
            <td>{props.employee.email}</td>
            <td>{props.employee.nrTel}</td>
            <td>
             <div className="dropdown">
                <button className="bytn" data-bs-auto-close="outside" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="./icons/three-vertical-dots.svg"/>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li className="dropdown-item" onClick={deleteEmployee}>Fshi</li>  
                  <li className="dropdown-item" onClick={increaseVacation}>Shto Leje</li> 
                  <li className="dropdown-item" onClick={decreaseVacation}>Hiq Leje</li> 
                  <li className="dropdown-item">Përditëso</li>
              </ul>
            </div> 
            </td>
        </tr>
        
    );
}