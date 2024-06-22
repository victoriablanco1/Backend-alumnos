const alumnosServices = require('./../services/alumnosServices');

module.exports = function (app) {
    app.get("/alumnos", async function(req, res){
        try {
            const response = await alumnosServices.getAlumnos();
            res.status(response.status).send(response.result);
        } catch (error) {
            res.status(500).send({ error: 'Error al obtener los alumnos' });
        }
    });

    app.get("/alumnos/:id", async function(req, res){
        try {
            const id = req.params.id;
            const response = await alumnosServices.getAlumnoById(id);
            res.status(response.status).send(response.result);
        } catch (error) {
            res.status(500).send({ error: 'Error al obtener el alumno' });
        }
    });

    app.post("/alumnos", async function(req, res){
        try {
            const body = req.body;
            const response = await alumnosServices.postAlumno(body);
            res.status(response.status).send(response.result);
        } catch (error) {
            res.status(500).send({ error: 'Error al crear el alumno' });
        }
    });


    app.put("/alumnos/:id", async function(req, res){
        try {
            const body = req.body;
            const response = await alumnosServices.putAlumno(body);
            res.status(response.status).send(response.result);
        } catch (error) {
            res.status(500).send({ error: 'Error al actualizar el alumno' });
        }
    });

    app.patch("/alumnos/:id", async function(req, res){
        try {
            const body = req.body;
            const response = await alumnosServices.patchAlumno(body);
            res.status(response.status).send(response.result);
        } catch (error) {
            res.status(500).send({ error: 'Error al modificar el alumno' });
        }
    });

    app.delete("/alumnos/:id", async function(req, res){
        try {
            const body = req.body;
            const response = await alumnosServices.deleteAlumno(body);
            res.status(response.status).send(response.result);
        } catch (error) {
            res.status(500).send({ error: 'Error al eliminar el alumno' });
        }
    });
};
