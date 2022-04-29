import { getRepository } from "typeorm"
import Event from "../models/Event";

class ListEventController {

    public async execute():Promise<Event[]>{
        
    const eventRepository = getRepository(Event)

    const eventList = await eventRepository.find()

    return eventList

    }


}

export default ListEventController