import * as React from 'react';

const CreateMeeting = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" />
        <label htmlFor="date">Date</label>
        <input type="text" id="date" />
        <label htmlFor="location">Location</label>
        <input type="text" id="location" />
        <label htmlFor="details">Details</label>
        <input type="text" id="details" />

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default CreateMeeting;