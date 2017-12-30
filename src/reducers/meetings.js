import meetingsData from '../fakeData/meetingsData';

export default (state = meetingsData, action) => {
  switch (action.type) {
    case 'CREATE_MEETING':
      return [];
    default:
      return state;
  }
};

