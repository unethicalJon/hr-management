package com.nova.hrmanager.service;

import com.nova.hrmanager.entity.Employee;
import com.nova.hrmanager.model.AddEmployeeRequest;
import com.nova.hrmanager.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
public class EmployeeService {

    private EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public void postEmployee(AddEmployeeRequest addEmployeeRequest) {
        Employee employee = new Employee();
        employee.setName(addEmployeeRequest.getName());
        employee.setSurname(addEmployeeRequest.getSurname());
        employee.setDepartment(addEmployeeRequest.getDepartment());
        employee.setPaidVacation(addEmployeeRequest.getPaidVacation());
        employee.setEmail(addEmployeeRequest.getEmail());
        employee.setNrTel(addEmployeeRequest.getNrTel());
        employeeRepository.save(employee);
    }

    public void deleteEmployee(Long id) {

        Optional<Employee> employee = employeeRepository.findById(id);

        employeeRepository.delete(employee.get());
    }

    public void updateEmployee(Long id) {
        Optional<Employee> employee = employeeRepository.findById(id);

        employee.get().setName(employee.get().getName());
        employee.get().setSurname(employee.get().getSurname());
        employee.get().setDepartment(employee.get().getDepartment());
        employee.get().setPaidVacation(employee.get().getPaidVacation());
        employee.get().setEmail(employee.get().getEmail());
        employee.get().setNrTel(employee.get().getNrTel());

        employeeRepository.save(employee.get());
    }

    public void increaseEmployeeVacation(Long id) {
        Optional<Employee> employee = employeeRepository.findById(id);

        employee.get().setPaidVacation(employee.get().getPaidVacation() + 1);

        employeeRepository.save(employee.get());
    }

    public void decreaseEmployeeVacation(Long id) {
        Optional<Employee> employee = employeeRepository.findById(id);

        employee.get().setPaidVacation(employee.get().getPaidVacation() - 1);

        employeeRepository.save(employee.get());
    }

   /* public Employee updateEmployee(Long id, Employee updatedEmployee) {

        Employee employee = employeeRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Employee with id: " + id + "doesn't exist!"));

        employee.setName(updatedEmployee.getName());
        employee.setSurname(updatedEmployee.getSurname());
        employee.setDepartment(updatedEmployee.getDepartment());
        employee.setPaidVacation(updatedEmployee.getPaidVacation());

        Employee updatedEmployeeObj = employeeRepository.save(employee);

        return updatedEmployeeObj;

    } */
}
