import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import UpdateUserAvatarService  from '../database/services/UpdateUserAvatarService'

const usersRouter = Router();
const upload = multer(uploadConfig);


import CreateUserService from '../database/services/CreateUserService';


usersRouter.post('/users', async ( request, response ) => {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
        name,
        email,
        password
    });
    return response.json(user);
});

usersRouter.patch('/users/avatar', ensureAuthenticated, upload.single('avatar'), async(request, response) => {
    const updateUserAvatar = new UpdateUserAvatarService();
    const user = await updateUserAvatar.execute({
        user_id: request.user.id,
        avatarFilename: request.file.filename
    });

    return response.json(user);
});

export default usersRouter;
