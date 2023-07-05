import { Request, Response } from "express";

class CitasController {

    getCitas(req: Request, res: Response) {
        res.send('getCita');
    }

    getCitasByPaciente(req: Request, res: Response) {
        res.send('getCitas');
    }

    getCitasByDoctor(req: Request, res: Response) {
        res.send('getCitas');
    }

    getCitasByEspecialidad(req: Request, res: Response) {
        res.send('getCitas');
    }

    addCita(req: Request, res: Response) {
        res.send('addCita');
    }

    deleteCita(req: Request, res: Response) {
        res.send('deleteCita');
    }

    updateCita(req: Request, res: Response) {
        res.send('updateCita');
    }
}

export const citasController = new CitasController();
