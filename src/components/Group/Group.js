import React, { Component } from 'react';
import { Layout } from 'antd';
import MeetingList from './MeetingList';
import MeetingDetail from './MeetingDetail';
import CreateMeeting from './CreateMeeting';

const { Content } = Layout;

const meetingOne = {
  group_id: 1,
  title: 'First Meeting',
  location: 'Google Hangout',
  details: 'We will discuss about our project!',
  due: 20171231,
};

class Group extends Component {
  constructor() {
    super();

    this.state = {
      showCreateMeeting: false,
    };
    this.handleNewClick = this.handleNewClick.bind(this);
  }
  handleNewClick() {
    this.setState(prevState => ({
      showCreateMeeting: !prevState.showCreateMeeting,
    }));
  }
  render() {
    return (
      <Content style={{ padding: '0 20%' }}>
        <Layout style={{ marginBottom: '50px' }}>
          <MeetingList
            handleNewClick={this.handleNewClick}
          />
          <MeetingDetail meetings={meetingOne} />
        </Layout>
        {this.state.showCreateMeeting && <CreateMeeting />}
      </Content>
    );
  }
}

export default Group;
