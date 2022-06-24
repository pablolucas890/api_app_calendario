import { getRepository } from "typeorm"
import Event from "../models/Event"

interface Request {
    title:string;
    username:string;
    description:string;
    link:string;
    image:Number;
    event_type:Number;
    calendar_type:Number;
    date_start: Date;
    date_end: Date;

}

class CreateEventController{

    public async execute({title, username, description, link, image, event_type, calendar_type, date_start, date_end}:Request): Promise<Event>{
        
        const eventRepository = getRepository(Event)

        const event = eventRepository.create({
           title,
           username,
           description,
           link,
           image,
           event_type,
           calendar_type,
           date_start,
           date_end,
        })
        
        await eventRepository.save(event)

        return event 
    }

}

export default CreateEventController