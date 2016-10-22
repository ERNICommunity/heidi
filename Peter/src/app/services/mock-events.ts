import { EddEvent } from '../models/edd-event';
import { Timeslot } from '../models/timeslot';

export const EVENTS: EddEvent[] = [
    { caption: "Open Space", description: "Description", slot: new Timeslot(), venue: "Room 1", sessionOwner: "Nobody", presenters: "Michal", targetAudience: "Everyone" },
    { caption: "Workshop Prototyping hands-on (1/2 Slot)", description: "Description", slot: new Timeslot(), venue: "Room 1", sessionOwner: "Nobody", presenters: "Michal", targetAudience: "Everyone" },
    { caption: "Roche MSA and some according Projects", description: "Description", slot: new Timeslot(), venue: "Room 1", sessionOwner: "Nobody", presenters: "Michal", targetAudience: "Everyone" },
    { caption: "Workshop facilitation", description: "Description", slot: new Timeslot(), venue: "Room 1", sessionOwner: "Nobody", presenters: "Michal", targetAudience: "Everyone" },
    { caption: "Business Process Mining", description: "Description", slot: new Timeslot(), venue: "Room 1", sessionOwner: "Nobody", presenters: "Michal", targetAudience: "Everyone" },
    { caption: "Linked Data Service LINDAS", description: "Description", slot: new Timeslot(), venue: "Room 1", sessionOwner: "Nobody", presenters: "Michal", targetAudience: "Everyone" },
];