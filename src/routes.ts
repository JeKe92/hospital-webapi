import { Router } from "express";

//Controladores
import { citasController } from "./controllers/citas.controller";
import { doctoresController } from "./controllers/doctores.controller";
import { pacientesController } from "./controllers/pacientes.controller";

class RouterAPI {
    router: Router;

    constructor() {
        this.router = Router();
        this.initRoutes();
    }

    private initRoutes(): void {
        const doctoresUrl: string = '/doctores';
        const pacientesUrl: string = '/pacientes';
        const citasUrl: string = '/citas';

        // Rutas de doctores
        this.router.get(doctoresUrl, doctoresController.getDoctores);
        this.router.get(`${doctoresUrl}/:cedula`, doctoresController.getDoctor);
        this.router.post(doctoresUrl, doctoresController.addDoctor);
        this.router.put(`${doctoresUrl}/:id`, doctoresController.updateDoctor);
        this.router.delete(`${doctoresUrl}/:id`, doctoresController.deleteDoctor);

        //Rutas de pacientes
        this.router.get(pacientesUrl, pacientesController.getPacientes);
        this.router.get(`${pacientesUrl}/:cedula`, pacientesController.getPaciente);
        this.router.post(pacientesUrl, pacientesController.addPaciente);
        this.router.put(`${pacientesUrl}/:id`, pacientesController.updatePaciente);
        this.router.delete(`${pacientesUrl}/:id`, pacientesController.deletePaciente);

        //Rutas de citas
        this.router.get(citasUrl, citasController.getCitas);
        this.router.get(`${citasUrl}/pacientes/:cedula`, citasController.getCitasByPaciente);
        this.router.get(`${citasUrl}/doctores/:cedula`, citasController.getCitasByDoctor);
        this.router.get(`${citasUrl}/especialidad/:especialidad`, citasController.getCitasByEspecialidad);
        this.router.post(`${citasUrl}`, citasController.addCita);
        this.router.put(`${citasUrl}/:id`, citasController.updateCita);
        this.router.delete(`${citasUrl}/:id`, citasController.deleteCita);
    }
}

const routerAPI = new RouterAPI();
export const router: Router = routerAPI.router;
