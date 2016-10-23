import { EddEvent } from '../models/edd-event';
import { Timeslot } from '../models/timeslot';

export const EVENTS: EddEvent[] = [
    { id: 1, caption: "Open Space", description: "Description", slot: new Timeslot(), venue: "Room 1", sessionOwner: "Nobody", presenters: "Michal", targetAudience: "Everyone" },
    { id: 2, caption: "Workshop Prototyping hands-on (1/2 Slot)", description: "Description", slot: new Timeslot(), venue: "Room 1", sessionOwner: "Nobody", presenters: "Michal", targetAudience: "Everyone" },
    { id: 3, caption: "Roche MSA and some according Projects", description: "Description", slot: new Timeslot(), venue: "Room 1", sessionOwner: "Nobody", presenters: "Michal", targetAudience: "Everyone" },
    { id: 4, caption: "Workshop facilitation", description: "Description", slot: new Timeslot(), venue: "Room 1", sessionOwner: "Nobody", presenters: "Michal", targetAudience: "Everyone" },
    { id: 5, caption: "Business Process Mining", description: "Description", slot: new Timeslot(), venue: "Room 1", sessionOwner: "Nobody", presenters: "Michal", targetAudience: "Everyone" },
    { id: 6, caption: "Linked Data Service LINDAS", description: "Description", slot: new Timeslot(), venue: "Room 1", sessionOwner: "Nobody", presenters: "Michal", targetAudience: "Everyone" },
];