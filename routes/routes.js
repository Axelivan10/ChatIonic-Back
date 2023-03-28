import express from "express";
import { userController } from '../controllers/user.controllers.js'
import { validateToken } from "../middlewares/accessToken.middleware.js";
import { conversationController } from '../controllers/conversation.controllers.js';
import { messageController } from '../controllers/messages.controllers.js';
export class Routes {
    /**
     * @param app
     */
    initRoutes(app = express.application) {
        app.get('/', (req, res) => {
            res.send('hola mundo');
        });

/*USER ROUTES*/

        /* CREAR - LISTAR - MOSTRAR1 - ACTUALIZAR - BORRAR*/

        app.route('/user', userController.create).post([], userController.create);
        app.route('/user', userController.find).get([], userController.find);
        app.route('/user/:id', userController.findid).get([], userController.findid);
        app.route('/user/:id', userController.update).put([], userController.update);
        app.route('/user/:id', userController.delete).delete([validateToken.validateJWT], userController.delete);
        
        app.post('/login', userController.login);
 
        app.route('/create_messages').post(userController.createMessages)
        app.route('/findChat/:id1/:id2').get(userController.findChat)


        // //TAB2 CHAT CREAR - LISTAR - MOSTRAR1 - ACTUALIZAR - BORRAR

        // app.get('/chat', conversationController.find);
        // app.route('/chat', conversationController.create).post([validateToken.validateJWT], conversationController.create);
        // app.route('/chat/:id', conversationController.findByPk).get([validateToken.validateJWT], conversationController.findByPk);
        // app.route('/chat/:id', conversationController.update).put([validateToken.validateJWT], conversationController.update);
        // app.route('/chat/:id', conversationController.delete).delete([validateToken.validateJWT], conversationController.delete);

        // //Message CREAR - LISTAR - MOSTRAR1 - ACTUALIZAR - BORRAR

        // app.get('/messages', messageController.find);
        // app.route('/messages', messageController.create).post([validateToken.validateJWT], messageController.create);
        // app.route('/messages/:id', messageController.findByPk).get([validateToken.validateJWT], messageController.findByPk);
        // app.route('/messages/:id', messageController.update).put([validateToken.validateJWT], messageController.update);
        // app.route('/messages/:id', messageController.delete).delete([validateToken.validateJWT], messageController.delete);
        
        
    }
}