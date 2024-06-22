const conn = require('../config/conn');

const alumnos = {
    async getAlumnos() {
        try {
            let sql = 'SELECT * FROM alumnos WHERE activo = 1';
            let resultado = await conn.query(sql);
            let response = { result: "No se encontraron registros", status: 404 };
            if (resultado.length > 0) {
                response = { result: resultado, status: 200 };
            }
            return response;
        } catch (error) {
            console.error("Error en la consulta SQL:", error);
            return { result: "Error en la consulta SQL", status: 500 };
        }
    },

    async getAlumnoById(id) {
        try {
            let sql = `SELECT * FROM alumnos WHERE activo = 1 AND id = ?`;
            let resultado = await conn.query(sql, [id]);
            let response = { result: "No se encontraron registros para el ID proporcionado", status: 404 };
            if (resultado.length > 0) {
                response = { result: resultado[0], status: 200 };
            }
            return response;
        } catch (error) {
            console.error("Error en la consulta SQL:", error);
            return { result: "Error en la consulta SQL", status: 500 };
        }
    },

    async postAlumno(body) {
        try {
            let sql = `INSERT INTO alumnos (nombre, apellido, curso, activo) VALUES (?, ?, ?, ?)`;
            let values = [body.nombre, body.apellido, body.curso, body.activo];
            let resultado = await conn.query(sql, values);
            let response = { result: "No se pudo crear el alumno", status: 400 };
            if (resultado.affectedRows > 0) {
                response = { result: "Alumno creado exitosamente", status: 201 };
            }
            return response;
        } catch (error) {
            console.error("Error en la consulta SQL:", error);
            return { result: "Error en la consulta SQL", status: 500 };
        }
    },

    async putAlumno(body) {
        try {
            let sql = `UPDATE alumnos SET nombre=?, apellido=?, curso=?, activo=? WHERE id=?`;
            let values = [body.nombre, body.apellido, body.curso, body.activo, body.id];
            let resultado = await conn.query(sql, values);
            let response = { result: "No se encontró el alumno para modificar", status: 404 };
            if (resultado.affectedRows > 0) {
                response = { result: "Alumno modificado exitosamente", status: 200 };
            }
            return response;
        } catch (error) {
            console.error("Error en la consulta SQL:", error);
            return { result: "Error en la consulta SQL", status: 500 };
        }
    },

    async patchAlumno(body) {
        try {
            let sql = `UPDATE alumnos SET nombre=? WHERE id=?`;
            let values = [body.nombre, body.id];
            let resultado = await conn.query(sql, values);
            let response = { result: "No se encontró el alumno para modificar", status: 404 };
            if (resultado.affectedRows > 0) {
                response = { result: "Alumno modificado exitosamente", status: 200 };
            }
            return response;
        } catch (error) {
            console.error("Error en la consulta SQL:", error);
            return { result: "Error en la consulta SQL", status: 500 };
        }
    },

    async deleteAlumno(body) {
        try {
            let sql = `UPDATE alumnos SET activo=? WHERE id=?`;
            let values = [body.activo, body.id];
            let resultado = await conn.query(sql, values);
            let response = { result: "No se encontró el alumno para eliminar", status: 404 };
            if (resultado.affectedRows > 0) {
                response = { result: "Alumno eliminado exitosamente", status: 200 };
            }
            return response;
        } catch (error) {
            console.error("Error en la consulta SQL:", error);
            return { result: "Error en la consulta SQL", status: 500 };
        }
    },
};

module.exports = alumnos;
