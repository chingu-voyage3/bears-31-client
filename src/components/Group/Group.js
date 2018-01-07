// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import MeetingList from './MeetingList';
import MeetingDetail from './MeetingDetail';
import { createMeeting } from '../../actions/actionCreators';

const { Content } = Layout;

type Props = {
  meetings: [{
    id: number,
    group_id: number,
    title: string,
    due: number,
    location: string,
    detail: string,
  }],
  createMeeting: Function,
  history: Object,
  match: Object,
};

const Group = (props: Props) => {
  const { meetings, createMeeting, history, match } = props;
  return (
    <Content>
      <Layout style={{ marginBottom: '50px' }}>
        <MeetingList
          meetings={meetings}
          createMeeting={createMeeting}
          history={history}
          groupId={match.params.groupId}
        />
        <MeetingDetail {...props} />
      </Layout>
    </Content>
  );
};

const mapStateToProps = state => ({ meetings: state.createMeeting });

const mapDispatchToProps = dispatch => ({
  createMeeting: (meeting) => {
    dispatch(createMeeting(meeting));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Group));
