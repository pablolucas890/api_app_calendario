import { getRepository } from "typeorm"
import Event from "../models/Event";
import User from "../models/User";

class ListEventController {

    public async execute():Promise<Event[]>{
        
    const eventRepository = getRepository(Event)

    const eventList = await eventRepository.find()
    return eventList

    }


}

export default ListEventController