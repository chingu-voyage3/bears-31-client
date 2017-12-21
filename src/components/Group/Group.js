// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import MeetingList from './MeetingList';
import MeetingDetail from './MeetingDetail';

const { Content } = Layout;

class Group extends React.Component<Props, State> {
  render() {
    const { meetings } = this.props;
    return (
      <Content style={{ padding: '0 20%' }}>
        <Layout style={{ marginBottom: '50px' }}>
          <MeetingList
            meetings={meetings}
          />
            <MeetingDetail />
        </Layout>
      </Content>
    );
  }
}

const mapStateToProps = state => ({ meetings: state.meetings });


export default connect(mapStateToProps)(Group);
