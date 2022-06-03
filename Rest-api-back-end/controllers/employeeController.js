const Employee = require("../models/employee");

var employeeController = {};

//## Read Employee, Read Employee, Create Employee, Update Employee, Delete Employee

// mostra todos employees
employeeController.showAll = function (req, res, next) {
  Employee.find({}).exec((err, dbEmployees) => {
    if (err) {
      console.log("Erro a ler");
      next(err);
    } else {
      console.log(dbEmployees);
      res.json(dbEmployees);
    }
  });
};

// mostra 1 employee por id
employeeController.show = function (req, res, next) {
  Employee.findOne({ _id: req.params.id }).exec((err, dbEmployee) => {
    if (err) {
      console.log("Erro a ler");
      next(err);
    } else {
      console.log(dbEmployee);
      res.json(dbEmployee);
    }
  });
};

// cria 1 employee
employeeController.create = function (req, res, next) {
  var employee = new Employee(req.body);

  employee.save((err) => {
    if (err) {
      console.log("Erro a gravar");
      next(err);
    } else {
      console.log(employee);
      res.json(employee);
    }
  });
};

// edita 1 employee
employeeController.edit = function (req, res, next) {
  Employee.findByIdAndUpdate(req.params.id, req.body, (err, editedEmployee) => {
    if (err) {
      console.log("Erro a gravar");
      next(err);
    } else {
      console.log(editedEmployee);
      res.json(editedEmployee);
    }
  });
};

// elimina 1 employee
employeeController.delete = function (req, res, next) {
  Employee.remove({ _id: req.params.id }).exec((err, deletedEmployee) => {
    if (err) {
      next(err);
    } else {
      console.log(deletedEmployee);
      res.json(deletedEmployee);
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
