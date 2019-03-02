import React, { Component } from 'react';
import { Table, Button, message, Popconfirm } from 'antd';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

export default class ReportTable extends Component {
  Cols = [
    {
      title: '工作内容',
      dataIndex: 'content',
      key: 'content',
      width: 400
    },
    {
      title: '进展',
      dataIndex: 'progress',
      key: 'progress'
    },
    {
      title: '备注',
      dataIndex: 'remark',
      key: 'remark',
      width: 400
    },
    {
      title: '操作',
      dataIndex: 'opt',
      key: 'opt',
      width: 200,
      render: (txt, record) => {
        console.log('record', record);

        const { id } = record;
        return (
          <Button.Group size="small">
            <Button
              type="primary"
              onClick={() => {
                this.props.onOpenEditModal(id);
              }}
            >
              更新
            </Button>
            <Mutation mutation={REMOVE_REPORT_ITEM}>
              {(removeReportItem, { data, error }) => {
                if (error) {
                  return message.error('操作失败');
                }
                return (
                  <Popconfirm
                    title="确定要删除吗?"
                    onConfirm={async () => {
                      const result = await removeReportItem({ variables: { id } });
                      const { isRemoved } = result.data;
                      if (isRemoved) {
                        message.success('删除成功！');
                        this.setState(
                          {
                            refetch: true
                          },
                          () => {
                            this.setState({
                              refetch: false
                            });
                          }
                        );
                      } else {
                        message.error('删除失败！');
                      }
                      console.log('apollo client', result);
                    }}
                  >
                    <Button type="danger">删除</Button>
                  </Popconfirm>
                );
              }}
            </Mutation>
          </Button.Group>
        );
      }
    }
  ];

  render() {
    const { data, type = 'done' } = this.props;
    if (type === 'todo') {
      this.Cols[1].title = '预期进展';
    }
    return (
      <Table
        rowKey="id"
        bordered
        size="middle"
        dataSource={data}
        columns={this.Cols}
        pagination={false}
      />
    );
  }
}
const REMOVE_REPORT_ITEM = gql`
  mutation RemoveReportItem($id: ID!) {
    isRemoved: removeReportItem(id: $id)
  }
`;
