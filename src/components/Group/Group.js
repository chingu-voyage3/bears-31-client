import React from 'react';
import { Layout } from 'antd';
import MeetingList from './MeetingList';
import MeetingDetail from './MeetingDetail';

const { Content } = Layout;

const Group = () => {
  return (
    <Content style={{ padding: '0 20%' }}>
      <Layout>
        <MeetingList />
        <MeetingDetail />
      </Layout>
    </Content>
  );
};

export default Group;