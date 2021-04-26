import {Request, Response} from "express";
import { MessagesServices } from "../services/MessagesService";

class MessagesController{

    async create(request: Request, response: Response) {
        const { admin_id, text, user_id } = request.body;
        const messagesServices = new MessagesServices();

        const message = await messagesServices.create({
            admin_id,
            text,
            user_id
        })
    
        return response.json(message);
    }
}

export {MessagesController};