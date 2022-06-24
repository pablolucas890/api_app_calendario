import { response, Router } from "express";
import CreateEventController from "../service/CreateEventController";
import ListEventController from "../service/ListEventController";


const eventsRouter  =  Router()

eventsRouter.post('/', async (request, response) => {
    const { title, description, username, link, image, event_type, calendar_type, date_start, date_end} = request.body;
  
    const createEvent = new CreateEventController();
  
    const event = await createEvent.execute({
        title, username, description, link, image, event_type, calendar_type, date_start, date_end
    });



  
  
    return response.status(200).json({"message": "Evento criado com sucesso"});
  });

 eventsRouter.get('/', async(request, response) => {
     const listEvent  = new ListEventController()

     const events = await listEvent.execute()

     return response.status(200).json(events)
 })

  export default eventsRouter