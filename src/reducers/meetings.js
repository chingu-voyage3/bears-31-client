import meetingsData from '../fakeData/meetingsData';

const meetings = (state = meetingsData, action) => {
  switch (action.type) {
    case 'CREATE_MEETING':
      return [];
    default:
      return state;
  }
};

export default meetings;
