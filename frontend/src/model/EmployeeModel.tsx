class EmployeeModel {
    
    id: number;
    name: string;
    surname: string;
    department: string;
    paidVacation: number;
    email: string;
    nrTel: number;

    constructor (id: number, name: string, surname: string, department: string, paidVacation: number, email: string, nrTel: number) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.department = department;
        this.paidVacation = paidVacation;
        this.email = email;
        this.nrTel = nrTel;
    }

}

export default EmployeeModel;