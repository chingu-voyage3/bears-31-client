export const createMeeting = ({
  group_id,
  title,
  location,
  details = '',
  due,
}) => ({
  type: 'CREATE_MEETING',
  meeting: {
    group_id,
    title,
    location,
    details,
    due,
  },
});

export const removeMeeting = () => ({});