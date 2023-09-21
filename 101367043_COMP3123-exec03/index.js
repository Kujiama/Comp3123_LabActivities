var http = require("http");

//TODO - Use Employee Module here

// since import {employees} from './Employee.js' will not work we will use require;
var employees = require("./Employee.js");

console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {

    //! to be able to show data use res.write()

    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.end("<h1>Welcome to Lab Exercise 03</h1>");
            
        } else if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            let employeeList = JSON.stringify(employees,null,2); 
            // use JSON.stringify(value, no custom replacer function, 2 spaces used for indentation) to stringify the object
            res.end(employeeList);

        } else if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]

            //instantiate a new array
            let empNames = [], empNamesJSON;

            /* 
                using a loop, itereate through every employee and add 
                to the new array string containing strings in the 
                format 'firstName lastName'. 
            */
            employees.forEach(employee => { empNames.push(`${employee.firstName} ${employee.lastName}`) });
            
            //use built-in array sort function to sort alphabetically
            empNames.sort();
            empNamesJSON = JSON.stringify(empNames,null,2);
            res.end(empNamesJSON);

        }  else if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }  

            // use array reduce function
            let totalSalary = employees.reduce( (sum,employee) => sum + employee.Salary,0);
            totalSalary = { "total_salary" : totalSalary}; // make salarySum into an object
            totalSalary = JSON.stringify(totalSalary); // stringfy salarysum to be displayed 
            res.end(totalSalary);

        }else{
            // we handle other routes with the 404 code 
            res.end(`{"error": "${http.STATUS_CODES[404]}"}`)

        }
    }
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})