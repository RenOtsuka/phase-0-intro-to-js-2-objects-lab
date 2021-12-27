// Write your solution in this file!
const employee = {
    name: "",
    streetAddress: "",
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    //console.log(employee);
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee[key];
    //console.log(newEmployee);
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}