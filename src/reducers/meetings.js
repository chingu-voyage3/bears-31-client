import meetingsData from '../fakeData/meetingsData';

export function createMeeting(state = meetingsData, action) {
  switch (action.type) {
    case 'CREATE_MEETING':
      return {
      };
    default:
      return state;
  }
};

