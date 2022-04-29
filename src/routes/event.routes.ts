import { response, Router } from "express";
import CreateEventController from "../service/CreateEventController";
import ListEventController from "../service/ListEventController";


const eventsRouter  =  Router()

eventsRouter.post('/', async (request, response) => {
    const { title, description, link, image, event_type, calendar_type, date_start, date_end} = request.body;
  
    const createEvent = new CreateEventController();
  
    const event = await createEvent.execute({
        title, description, link, image, event_type, calendar_type, date_start, date_end
    });



  
  
    return response.json(event);
  });

 eventsRouter.get('/', async(request, response) => {
     const listEvent  = new ListEventController()

     const events = await listEvent.execute()

     return response.json(events)
 })

  export default eventsRouter