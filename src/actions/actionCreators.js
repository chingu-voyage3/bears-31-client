export const createMeeting = ({
  id,
  group_id,
  title = '',
  location = '',
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