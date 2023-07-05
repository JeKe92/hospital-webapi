import { Request, Response } from "express";

class DoctoresController {

    getDoctor(req: Request, res: Response) {
        res.send('getDoctor');
    }

    getDoctores(req: Request, res: Response) {
        res.send('getDoctores');
    }

    addDoctor(req: Request, res: Response) {
        res.send('addDoctor');
    }

    deleteDoctor(req: Request, res: Response) {
        res.send('deleteDoctor');
    }

    updateDoctor(req: Request, res: Response) {
        res.send('updateDoctor');
    }
}

export const doctoresController = new DoctoresController();
