import { getRepository } from "typeorm"


interface Request {
    title:string,
    description:string,
    link:string,
    image:Number,
    eventType:Number,
    calendarType:Number,
    dateStart: Date,
    dateEnd: Date

}

class CreateEventController{

    public async execute({title, description, link, image, eventType, calendarType, dateStart, dateEnd}:Request): Promise<Event>{
        const eventRepository = getRepository(Event)

        const event = eventRepository.create({
            title,
            description,
            link,
            image,
            eventType,
            calendarType,
            dateStart,
            dateEnd
        })
        
        await eventRepository.save(event)

        return event 
    }

}

export default CreateEventController