package com.nova.hrmanager.model;

import lombok.Data;

@Data
public class AddEmployeeRequest {

    private String name;

    private String surname;

    private String department;

    private int paidVacation;

    private String email;

    private int nrTel;

}
