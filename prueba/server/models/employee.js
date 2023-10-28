const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    correo: {
        type: String,
        require: true
    },
    sexo: {
        type: String,
        require: true
    },
    area: {
        type: String,
        require: true
    },
    descripcion: {
        type: String,
        require: true
    },
    boletin: {
        type: String,
        require: true
    },
    roles: {
        type: String,
        require: true
    }
})

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
