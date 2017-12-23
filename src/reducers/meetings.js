import meetingsData from '../fakeData/meetingsData';

export default (state = meetingsData, action) => {
  switch (action.type) {
    case 'CREATE_MEETING':
      return [];
    case 'FETCH_MEETING':
      return state.find(meeting => meeting.id === action.id);
    default:
      return state;
  }
};

