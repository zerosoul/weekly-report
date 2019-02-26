import React, { Component } from 'react';
import { Table, Skeleton } from 'antd';
import { Query } from 'react-apollo';

export default class QueryTable extends Component {
  render() {
    const { cols, gql, refetch = false, ...rest } = this.props;
    return (
      <Query query={gql} pollInterval={500}>
        {({ data, loading, error, refetch }) => {
          if (refetch) {
            refetch();
          }
          if (loading) {
            return <Skeleton active />;
          }
          if (error) {
            return <div>出错啦~~~</div>;
          }
          return (
            <Table
              rowKey="id"
              bordered
              size="middle"
              dataSource={data.userList.users}
              columns={cols}
              pagination={false}
              {...rest}
            />
          );
        }}
      </Query>
    );
  }
}
