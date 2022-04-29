import { EntityRepository } from "typeorm/decorator/EntityRepository";
import { Repository } from "typeorm/repository/Repository";
import Event from "../models/Event"


@EntityRepository(Event)
class EventRepository extends Repository<Event> {
 
}

export default EventRepository;