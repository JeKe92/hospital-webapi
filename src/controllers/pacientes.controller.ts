import { Request, Response } from "express";

class PacientesController {

    getPaciente(req: Request, res: Response) {
        res.send('getPaciente');
    }

    getPacientes(req: Request, res: Response) {
        res.send('getPacientes');
    }

    addPaciente(req: Request, res: Response) {
        res.send('addPaciente');
    }

    deletePaciente(req: Request, res: Response) {
        res.send('deletePaciente');
    }

    updatePaciente(req: Request, res: Response) {
        res.send('updatePaciente');
    }
}

export const pacientesController = new PacientesController();
