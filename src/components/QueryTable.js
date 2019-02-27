import React, { Component } from 'react';
import { Table, Skeleton } from 'antd';
import { Query } from 'react-apollo';

export default class QueryTable extends Component {
  render() {
    const {
      cols,
      gql,
      variables = {},
      updateVariables = () => {},
      refetch: isRefetch = false,
      pagination: page = false,
      ...rest
    } = this.props;
    return (
      <Query query={gql} variables={variables}>
        {({ data, loading, error, refetch, fetchMore }) => {
          if (isRefetch) {
            refetch();
            return <Skeleton active />;
          }
          if (loading) {
            return <Skeleton active />;
          }
          if (error) {
            return <div>出错啦~~~</div>;
          }
          let pagination = false;
          if (page) {
            const { total, pageSize, current } = data.resp;
            pagination = {
              total,
              pageSize,
              current,
              showTotal: () => {
                return `共 ${total}`;
              },
              onChange: (num, wtf) => {
                console.log('wtf', num, wtf);
                updateVariables({
                  skip: pageSize * (num - 1),
                  first: pageSize
                });
              },
              ...page
            };
          }
          return (
            <Table
              rowKey="id"
              bordered
              size="middle"
              dataSource={data.resp.list}
              columns={cols}
              pagination={pagination}
              {...rest}
            />
          );
        }}
      </Query>
    );
  }
}
