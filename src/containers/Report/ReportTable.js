import React, { Component } from 'react';
import { Table, Button } from 'antd';

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
              编辑
            </Button>
            <Button type="danger">删除</Button>
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
