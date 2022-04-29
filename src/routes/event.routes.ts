import { Router } from "express";
import CreateEventController from "../controllers/CreateEventController";


const eventsRouter  =  Router()

eventsRouter.post('/', async (request, response) => {
    const { title, description, link, image, event_type, calendar_type, date_start, date_end} = request.body;
  
    const createEvent = new CreateEventController();
  
    const event = await createEvent.execute({
        title, description, link, image, event_type, calendar_type, date_start, date_end
    });

    console.log(event)
  
  
    return response.json(event);
  });

  export default eventsRouter