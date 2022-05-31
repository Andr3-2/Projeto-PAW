const { render } = require("ejs");
const { default: mongoose } = require("mongoose");
var Employee = require("../models/employee");
const { edit } = require("./bookController");

var employeeController = {};

//## Read Employees, Read Employee, Delete Employee, Create Employee, Update Employee

//Read Employees
employeeController.showAll = (req, res) => {
  Employee.find({}).exec((err, dbEmployees) => {
    if (err) {
      console.log("Erro a ler");
      res.redirect("/error");
    } else {
      //console.log(`Books Readed: \n ${dbEmployees}`);
      res.json(dbEmployees);
    }
  });
};

//Read Employee
employeeController.show = (req, res) => {
  var id = req.params.id;
  console.log(`ID: \n ${id}`);
  Employee.findOne({ _id: id }, function (err, results) {
    if (err) {
      console.log("Erro a gravar");
      res.redirect("/error");
    } else {
      console.log(results);
      var one = new Employee(results.Employee);
      res.json(dbEmployees);
    }
  });
};

//Delete Employee
employeeController.delete = (req, res, next) => {
  var id = req.params.id;
  console.log(`ID: \n ${id}`);
  Employee.deleteOne({ _id: id }, function (err, results) {
    if (err) {
      console.log("Erro a gravar");
      res.redirect("/error");
    } else {
      res.json(results);
    }
  });
};

//Create Employee
employeeController.create = (req, res, next) => {
  var employee = new Employee(req.body);
  console.log(`Employee Created: \n ${employee}`);
  employee.save((err) => {
    if (err) {
      console.log("Erro a gravar");
      res.redirect("/error");
    } else {
      console.log(employee);
      res.json(employee);
    }
  });
};

//Update Employee
employeeController.edit = (req, res, next) => {
  Employee.findByIdAndUpdate(req.body._id, req.body, (err, editedEmployee) => {
    if (err) {
      console.log("Erro a gravar");
      res.redirect("/error");
    } else {
      res.json(editedEmployee);
    }
  });
};

/*employeeController.search = (req, res, next) => {
  Employee.find(
    { [req.body.searchOpt]: { $regex: req.body.search } },
    (err, employee) => {
      if (err) {
        res.redirect("/error");
      } else {
        console.log(employee);
        res.render("employees/employee", { employees: employee });
      }
    }
  );
};*/

module.exports = employeeController;
