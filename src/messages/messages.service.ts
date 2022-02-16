import { MessagesRepository } from "./messages.repository";


export class MessagesService {
    messagesRepo: MessagesRepository

    constructor() {
        //Dont do this in real app
        this.messagesRepo = new MessagesRepository()
    }

    findOne(id: string) {
        return this.messagesRepo.findOne(id)
    }

    findAll() {
        return this.messagesRepo.findAll()
    }

    create(content: string) {
        return this.messagesRepo.create(content)
    }
}