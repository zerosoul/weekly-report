import React, { Component } from 'react';
import { Table, Button } from 'antd';

export default class GroupTable extends Component {
  Cols = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 50
    },
    {
      title: '名称',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: '创建时间',
      dataIndex: 'createAt',
      key: 'createAt',
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
