package com.nova.hrmanager.repository;

import com.nova.hrmanager.entity.Employee;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.RequestParam;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    Page<Employee> findByName(@RequestParam("name") String name, Pageable pageable);

    Page<Employee> findByDepartment(@RequestParam("department") String department, Pageable pageable);

    void deleteById(@Param("employee_id") Long id);
}
