// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import MeetingList from './MeetingList';
import MeetingDetail from './MeetingDetail';
import CreateMeeting from './CreateMeeting';
import {
  fetchMeeting,
} from '../../actions/actionCreators';

const { Content } = Layout;

type Props = {
  meetings: Array<Object>,
  fetchMeeting: Function,
};

type State = {
  showCreateMeeting: boolean,
};

class Group extends React.Component<Props, State> {
  state = {
    showCreateMeeting: false,
  };
  handleNewClick = () => {
    this.setState(prevState => ({
      showCreateMeeting: !prevState.showCreateMeeting,
    }));
  }
  render() {
    const { meetings, fetchMeeting } = this.props;
    return (
      <Content style={{ padding: '0 20%' }}>
        <Layout style={{ marginBottom: '50px' }}>
          <MeetingList
            handleNewClick={this.handleNewClick}
            fetchMeeting={fetchMeeting}
            meetings={meetings}
          />
            <MeetingDetail />
        </Layout>
        {this.state.showCreateMeeting && <CreateMeeting />}
      </Content>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchMeeting: (id, group_id) => {
    dispatch(fetchMeeting(id, group_id));
  },
});

const mapStateToProps = state => ({ meetings: state.meetings });


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Group));
