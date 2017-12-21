// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import MeetingList from './MeetingList';
import MeetingDetail from './MeetingDetail';
import CreateMeeting from './CreateMeeting';

const { Content } = Layout;

type Props = {

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
    const { meetings } = this.props;
    console.log(this.props);
    return (
      <Content style={{ padding: '0 20%' }}>
        <Layout style={{ marginBottom: '50px' }}>
          <MeetingList
            handleNewClick={this.handleNewClick}
            meetings={meetings}
          />
            <MeetingDetail />
        </Layout>
        {this.state.showCreateMeeting && <CreateMeeting />}
      </Content>
    );
  }
}

const mapStateToProps = state => ({ meetings: state.meetings });


export default connect(mapStateToProps)(Group);
