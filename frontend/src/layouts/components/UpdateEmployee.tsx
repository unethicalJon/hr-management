import React, { useEffect, useState } from 'react';
import EmployeeModel from '../../model/EmployeeModel';
import { ReturnEmployee } from './ReturnEmployee';

export const UpdateEmployee: React.FC<{ employee: EmployeeModel }> = (props, key) => {

    // New Data for Employee 
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [department, setDepartment] = useState('');
    const [paidVacation, setPaidVacation] = useState<number>(0);

    function departmentField(value: string) {
        setDepartment(value);
    }

    async function updateEmployee() {
        const url = `http://localhost:8083/admin/edit/employee/?id=${props.employee.id}`;
            const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' }
            };

    const updateResponse = await fetch(url, requestOptions);
    if (!updateResponse.ok) {
        throw new Error('Something went wrong!');
    }
    setName(name);
    setSurname(surname);
    setDepartment(department);
    setPaidVacation(paidVacation);  

    }   
    
    return (
            <div className='card w-75'>
                <h6 className='card-header'>
                    Shto punonjës të ri
                    </h6>
                <div className='card-body'>
                    <form method='POST'>
                        <div className='row'>
                            <div className='col-md-3 mb-3'>
                                <label className='form-label'> {props.employee.name} </label>
                                <input type="text" className='form-control' name='title' required 
                                    onChange={e => setName(e.target.value)} value={name} />
                            </div>
                            <div className='col-md-3 mb-3'>
                                <label className='form-label'> {props.employee.surname} </label>
                                <input type="text" className='form-control' name='author' required 
                                    onChange={e => setSurname(e.target.value)} value={surname}/>
                            </div>
                            <div className='col-md-3 mb-3'>
                                <label className='form-label'> {props.employee.department} </label>
                                <button className='form-control button-10-grey dropdown-toggle' type='button' 
                                    id='dropdownMenuButton1' data-bs-toggle='dropdown' aria-expanded='false'>
                                        {department}
                                </button>
                                <ul id='addNewEmployeekId' className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                                    <li><a onClick={() => departmentField('Marketing')} className='dropdown-item'>Marketing</a></li>
                                    <li><a onClick={() => departmentField('Finance')} className='dropdown-item'>Finance</a></li>
                                    <li><a onClick={() => departmentField('Prokure')} className='dropdown-item'>Prokure</a></li>
                                    <li><a onClick={() => departmentField('Burime Njerezore')} className='dropdown-item'>Burime Njerezore</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-3 mb-3'>
                            <label className='form-label'> {props.employee.paidVacation} </label>
                            <input type='text' className='form-control' name='Paid Vacation' required 
                                onChange={e => setPaidVacation(Number(e.target.value))} value={paidVacation}/>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <button type='button' className='button-10' onClick={updateEmployee}>
                                Përditëso punonjësin
                            </button>
                        </div>
                    </form>
                </div>
            </div>
    );
} 