// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import MeetingList from './MeetingList';
import MeetingDetail from './MeetingDetail';
import CreateMeeting from './CreateMeeting';

const { Content } = Layout;

type Props = {
  meetings: Array<Object>,
  match: Object,
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
    const { meetings, match } = this.props;
    return (
      <Content style={{ padding: '0 20%' }}>
        <Layout style={{ marginBottom: '50px' }}>
          <MeetingList
            handleNewClick={this.handleNewClick}
            meetings={meetings}
          />
            <MeetingDetail {...this.props} />
        </Layout>
        {this.state.showCreateMeeting && <CreateMeeting />}
      </Content>
    );
  }
}


const mapStateToProps = state => ({ meetings: state.meetings });


export default withRouter(connect(mapStateToProps)(Group));
