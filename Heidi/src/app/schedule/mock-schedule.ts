import { Schedule } from './schedule';

export const SCHEDULE: Schedule = {
  date: new Date(2016, 8, 24),
  slots: [
    {
      id: 1,
      startTime: new Date(2016, 8, 24, 8, 0, 0),
      endTime: new Date(2016, 8, 24, 8, 30, 0),
      title: 'Welcome Coffee',
      tracks: []
    },
    {
      id: 2,
      startTime: new Date(2016, 8, 24, 8, 30, 0),
      endTime: new Date(2016, 8, 24, 9, 0, 0),
      title: 'Introduction',
      tracks: []
    }
  ]
};
