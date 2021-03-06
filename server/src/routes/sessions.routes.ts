import { Router } from 'express';

const sessionsRouter = Router();

import AuthenticateUserService from '../database/services/AuthenticateUserService';


sessionsRouter.post('/sessions', async ( request, response ) => {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService();

    const { user, token } = await authenticateUser.execute({
        email,
        password
    })


    return response.json({ user , token});
})

export default sessionsRouter;
