import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import appointmentRoutes from '../src/routes/appointments.routes';
import usersRoutes from '../src/routes/users.routes';
import sessionsRoutes from '../src/routes/sessions.routes';

import 'reflect-metadata';

import uploadConfig from './config/upload'
import AppError from './errors/AppError'

import './database/services'

const app = express();

app.use(cors());
app.use(express.json());
app.use(appointmentRoutes);
app.use(usersRoutes);
app.use(sessionsRoutes);
app.use('/files', express.static(uploadConfig.directory));

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
    if(err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message
        })
    }

    console.error(err);

    return response.status(500).json({
        status: 'error',
        message: 'Internal server error'
    })
});

app.listen(3333, () => {
    console.log('Server STARTED on port 3333!');
})
