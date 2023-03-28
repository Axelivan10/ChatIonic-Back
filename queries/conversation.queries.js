import { conversationModel } from "../models/conversation.model.js";

class conversationQueries {

    async store(newObject){
        try{
            const query = conversationModel.create(newObject);
            if(query){
                return {ok: true, data:query};
            }
        }catch (e){
            console.log('Error al ejecutar query' , e);
            return {ok: false, date:null}
        }
    }

    async find() {
        try{
            const query = await conversationModel.findAll({include:'messages'});
            if(query){
                return{ok: true, data: query};
            }
        } catch(e){
            console.log('Error al ejecutar query', e);
            return {ok: false, data: null};
        }
    }

    async findByPk(id) {
        try {
            const query = await conversationModel.findByPk(id,{include:"messages"});
            if(query){
                return {ok: true, data: query};
            }else{
                return {ok: false, data: null};
            }
        } catch (e) {
            console.log('Error al ejecutar query', e);
            return {ok: false, data: null};
        }
    }

    async update(chat_id, chat_name) {
        try {
            const query = await conversationModel.update({
                chat_name: chat_name,
                include:"chat_users"
            }, {
                where:{
                    chat_id : chat_id
                }
            })
            if(query){
                return {ok: true, data: query};
            }else{
                return {ok: false, data: null};
            }
        } catch (e) {
            console.log('Error al ejecutar query', e);
            return {ok: false, data: null};
        }
    }

    async delete(chat_id) {
        try {
            const query = await conversationModel.destroy({
                where: {
                    chat_id : chat_id
                }
              })
            if(query){
                return {ok: true, data: query};
            }else{
                return {ok: false, data: null};
            }
        } catch (e) {
            console.log('Error al ejecutar query', e);
            return {ok: false, data: null};
        }
    }

}

export const ConversationQueries = new conversationQueries();