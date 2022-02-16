import { readFile, writeFile } from "fs/promises";
import { v4 as uuidv4 } from 'uuid';

export class MessagesRepository {
    async findOne(id: string) {
        const messages = await readFile("messages.json", "utf-8")
        const messagesJson = JSON.parse(messages)

        return messagesJson[id]
    }

    async findAll() {
        const messages = await readFile("messages.json", "utf-8")

        return JSON.parse(messages)
    }

    async create(content: string) {
        const messages = await readFile("messages.json", "utf-8").then(m => JSON.parse(m))

        const id = uuidv4()

        messages[id] = { id, content }

        await writeFile("messages.json", JSON.stringify(messages))
    }
}