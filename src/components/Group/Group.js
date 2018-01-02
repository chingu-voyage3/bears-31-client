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
};

const Group = (props: Props) => {
  const { meetings } = props;
  return (
    <Content style={{ padding: '0 20%' }}>
      <Layout style={{ marginBottom: '50px' }}>
        <MeetingList
          meetings={meetings}
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

export default withRouter(connect(mapStateToProps)(Group));
