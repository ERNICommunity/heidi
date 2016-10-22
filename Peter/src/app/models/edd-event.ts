import { Timeslot } from './timeslot';

export class EddEvent {
    caption: string;
    description: string;
    slot: Timeslot;
    venue: string;
    sessionOwner: string;
    presenters: string;
    targetAudience: string;
}