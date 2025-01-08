import { width } from '@mui/system';
import React, { useState } from 'react';
import AddEmployeeRequest from "../../model/AddEmployeeRequest";

export const AddNewEmployee = () => {

    // New Employee
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [department, setDepartment] = useState('Departmenti');
    const [paidVacation, setPaidVacation] = useState(0);
    const [email, setEmail] = useState('');
    const [nrTel, setNrTel] = useState(0);

    // Displays
    const [displayWarning, setDisplayWarning] = useState(false);
    const [displaySuccess, setDisplaySuccess] = useState(false);

    function departmentField(value: string) {
        setDepartment(value);
    }

    async function submitNewEmployee() {
        const url = `http://localhost:8083/admin/add/employee`;
        if ( name !== '' && surname !== '' && department !== 'Departmenti'
            && paidVacation >= 0) {
            const employee: AddEmployeeRequest = new AddEmployeeRequest(name, surname, department, paidVacation, email, nrTel);
            const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(employee)
            };

        const submitNewEmployeeResponse = await fetch(url, requestOptions);
        if (!submitNewEmployeeResponse.ok) { 
            throw new Error ('Something went wrong');
               }
        setName('');
        setSurname('');
        setDepartment('Departmenti');
        setPaidVacation (0);
        setEmail('');
        setNrTel(0);
        setDisplayWarning(false);
        setDisplaySuccess(true);
        } else{
            setDisplayWarning(true);
            setDisplaySuccess(false);
        }

    }   

    return (
        <div className='container mt-4 mb-5'>
                <h3 className='text-start'>
                    Shto punonjës të ri
                    </h3>
                    <div className='card justify-content-center' style={{width: "30rem"}}>
                <div className='card-body'>
                    <form method='POST'>
                        <div className='row'>
                            <div className='col text-start'>
                                <label className='form-label'> Emri </label>
                                <input type="text" className='form-control' name='name' required 
                                    onChange={e => setName(e.target.value)} value={name} />
                            </div>
                            <div className='col text-start'>
                                <label className='form-label'> Mbiemri </label>
                                <input type="text" className='form-control' name='surname' required 
                                    onChange={e => setSurname(e.target.value)} value={surname}/>
                            </div>
                            </div>
                            <div className='row mt-3'>
                            <div className='col text-start'>
                                <label className='form-label'> Email </label>
                                <input type="text" className='form-control' name='email' required 
                                    onChange={e => setEmail(e.target.value)} value={email}/>
                            </div>
                            <div className='col text-start'>
                            <label className='form-label'> Numër Telefoni </label>
                            <input type='text' className='form-control' name='nrTel' required 
                                onChange={e => setNrTel(Number(e.target.value))} value={nrTel}/>
                            </div>
                            </div>
                            <div className='row mt-3'>
                            <div className='col text-start'>
                            <label className='form-label'> Departamenti </label>
                                <button className='form-control btn btn-outline-secondary dropdown-toggle' type='button' 
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
                        <div className='col text-start'>
                            <label className='form-label'> Pushime të paguara </label>
                            <input type='text' className='form-control' name='paidVacation' required 
                                onChange={e => setPaidVacation(Number(e.target.value))} value={paidVacation}/>
                        </div>
                        </div>
                        <div className='row mt-4'>
                        <div className='d-flex justify-content-center'>
                            <button type='button' className='btn btn-primary' onClick={submitNewEmployee}>
                                Shto punonjësin
                            </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className='row mt-4'>
            {displaySuccess && 
                <div className='alert alert-success' role='alert'>
                    Punonjësi u shtua me sukses! 
                </div>
            }
            {displayWarning && 
                <div className='alert alert-danger' role='alert'>
                    Të gjitha fushat duhen plotësuar!
                </div>
            }
        </div>
        </div>
    );
}