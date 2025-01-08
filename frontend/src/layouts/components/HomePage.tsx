import React, { useState} from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AddNewEmployee } from "./AddNewEmployee";
import { EmployeesTable } from "./EmployeesTable";
import { Navbar } from "./Navbar";
import { UpdateEmployee } from "./UpdateEmployee";

export const HomePage = () => {

  return (
    <div>
      <EmployeesTable/>
    </div>   
  );
}
