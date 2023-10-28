const Employee = require('../models/employee')

    exports.crearEmployee = async (req, res) => {
        try {
            let employee;
            employee = new Employee(req.body);
            await employee.save();
            res.send(employee)
        } catch (error) {
            console.log(error);
            res.status(500).send('Error');
        }
    }

exports.obtenerEmployees = async (req, res) => {
    try {
       const employees = await Employee.find();
       res.json(employees);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.obtenerEmployee = async (req, res) => {
    try {
       let employee = await Employee.findById(req.params.id);

       if(!employee){
        res.status(500).send('El empleado no existe');
       }
       res.json(employee);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.actualizarEmployee = async (req, res) => {
    try {
       const{nombre, correo, sexo, area, descripcion, boletin, roles} = req.body
       let employee = await Employee.findById(req.params.id);

       if(!employee){
        res.status(500).send('No se ha actualizado el dato');
       }
       employee.nombre = nombre;
       employee.correo = correo;
       employee.sexo = sexo;
       employee.area = area;
       employee.descripcion= descripcion;
       employee.boletin = boletin;
       employee.roles = roles;

       employee = await Employee.findByIdAndUpdate(
        {_id:req.params.id},employee,{new: true})
       res.json(employee)

    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.eliminarEmployee = async (req, res) => {
    try {
       let employee = await Employee.findById(req.params.id);

       if(!employee){
        res.status(500).send('El empleado no existe');
       }
       await Employee.findByIdAndRemove({_id:req.params.id})
       res.json({msg : "Employee Eliminado"});
       
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}