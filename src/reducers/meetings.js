import meetingsData from '../fakeData/meetingsData';

console.log(meetingsData);

export function createMeeting(state = meetingsData, action) {
  switch (action.type) {
    case 'CREATE_MEETING':
      return {
        ...state,
        ...action,
      };
    default:
      return state;
  }
};

