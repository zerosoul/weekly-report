import React, { Component } from 'react';
import { Table, Button } from 'antd';

export default class UserTable extends Component {
  Cols = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 50
    },
    {
      title: '姓名/昵称',
      dataIndex: 'name',
      key: 'name',
      render: (val, record) => {
        return `${val}/${record.nickname}`;
      }
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
      width: 400
    },
    {
      title: '角色',
      dataIndex: 'role',
      key: 'role'
    },
    {
      title: '头像',
      dataIndex: 'avatar',
      key: 'avatar'
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
    const { data, loading } = this.props;
    // if (type === 'todo') {
    //   this.Cols[1].title = '预期进展';
    // }
    return (
      <Table
        loading={loading}
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
