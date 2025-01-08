package com.nova.hrmanager.controller;

import com.nova.hrmanager.model.AddEmployeeRequest;
import com.nova.hrmanager.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/admin")
public class AddEmployeeController {

    private EmployeeService employeeService;

    @Autowired
    public AddEmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @PostMapping("/add/employee")
    public void postEmployee(@RequestBody AddEmployeeRequest addEmployeeRequest){
        employeeService.postEmployee(addEmployeeRequest) ;
    }

    @DeleteMapping("/delete/employee")
    public void deleteEmployee(@RequestParam Long id){
        employeeService.deleteEmployee(id);
    }

    @PutMapping("/edit/employee")
    public void updateEmployee(@RequestParam Long id) { employeeService.updateEmployee(id); }

    @PutMapping("/increase/employee/vacation")
    public void increaseEmployeeVacation(@RequestParam Long id)
        {
            employeeService.increaseEmployeeVacation(id);
        }

    @PutMapping("/decrease/employee/vacation")
    public void decreaseEmployeeVacation(@RequestParam Long id)
    {
        employeeService.decreaseEmployeeVacation(id);
    }

    }

