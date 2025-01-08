import React from "react";
import { useEffect, useState } from "react";
import EmployeeModel from "../../model/EmployeeModel";
import { ReturnEmployee } from "./ReturnEmployee";

 export const EmployeesTable = () => {

  const [employees, setEmployees] = useState<EmployeeModel[]>([]);
  const [search, setSearch] = useState('');
  const [searchUrl, setSearchUrl] = useState(''); 
  const [categorySelect, setCategorySelect] = useState('Employee Department');

  const [employeeDelete, setEmployeeDelete] = useState(false);


  useEffect(() => {

  const fetchEmployees = async () => {
    const baseUrl: string = "http://localhost:8083/employees";

     let url: string = '';

    if (searchUrl === '') {
      url = `${baseUrl}`;
    } else {
      url = baseUrl + searchUrl;
    } 
    
      const response = await fetch(url);
    
      const responseJson = await response.json();
     
      const responseData = responseJson._embedded.employees;

      const loadedEmployees: EmployeeModel[] = [];

      for(const key in responseData) {
        loadedEmployees.push({
          id: responseData[key].id,
          name: responseData[key].name,
          surname: responseData[key].surname,
          department: responseData[key].department,
          paidVacation: responseData[key].paidVacation,
          email: responseData[key].email,
          nrTel: responseData[key].nrTel
        });
      }

      setEmployees(loadedEmployees);

    };

  fetchEmployees();

}, [searchUrl, employeeDelete])

  
  const deleteEmployee = () => setEmployeeDelete(!employeeDelete);

   const searchChange = () => {
    if (search==='') {
      setSearchUrl('');
    } else  {
      setSearchUrl(`/search/findByName?name=${search}`)
    }   
  } 

  const categoryField = (value: string) => {
    if (
      value === 'Marketing' ||
      value === 'Prokure' ||
      value === 'Finance' ||
      value === 'Burime Njerezore' 
    ) { setCategorySelect(value);
        setSearchUrl(`/search/findByDepartment?department=${value}`) 
      }
      else {
        setCategorySelect('Të gjitha');
        setSearchUrl('') 
      }
  } 

  return (
  <div className="card-body">
    <div className="container">
        <div>
        <div className="row mt-2">
        <h3 className="d-flex"> Lista e punonjësve </h3>
          <div className="col-5">
            <div className="d-flex mt-2">
            <input className="form-control me-2" type="search" 
              placeholder="Kërko sipas emrit" 
              onChange={e => setSearch(e.target.value)}/> 
            <button className="btn btn-outline-primary me-2"
              onClick={() => searchChange()}>
              Kërko
            </button> 
            <div className="dropdown">
              <button className="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                {categorySelect}
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li onClick={() => categoryField('Te gjitha')}>
                  <a className="dropdown-item" href="#">Të gjitha</a>
                </li>
                <li onClick={() => categoryField('Marketing')}>
                  <a className="dropdown-item" href="#">Marketing</a>
                </li>
                <li onClick={() => categoryField('Finance')}>
                  <a className="dropdown-item" href="#">Finance</a>
                </li>
                <li onClick={() => categoryField('Prokure')}>
                  <a className="dropdown-item" href="#">Prokure</a>
                </li>
                <li onClick={() => categoryField('Burime Njerezore')}>
                  <a className="dropdown-item" href="#">Burime Njerezore</a>
                </li>
              </ul>
          </div>
          </div> 
          </div>
            <div className="container mt-2">
              <table className='table table-bordered'>
                <thead className="table-dark">
                  <tr>
                    <th scope='col'>Emri</th>
                    <th scope='col'>Mbiemri</th>
                    <th scope='col'>Departmenti</th>
                    <th scope='col'>Leje vjetore</th>
                    <th scope='col'>Nr. Tel</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Veprime</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map(employee => (
                    <ReturnEmployee employee={employee} key={employee.id} deleteEmployee={deleteEmployee} />
                  ))}
                </tbody>
              </table>
              </div></div>
              </div></div></div>
  );

 }