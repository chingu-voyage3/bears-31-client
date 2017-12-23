export const createMeeting = ({
  id,
  group_id,
  title,
  location,
  details = '',
  due,
}) => ({
  type: 'CREATE_MEETING',
  meeting: {
    id,
    group_id,
    title,
    location,
    details,
    due,
  },
});

export const fetchMeeting = (id, group_id) => ({
  type: 'FETCH_MEETING',
  id,
  group_id,
});

