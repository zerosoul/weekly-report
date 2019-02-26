import React, { Component } from 'react';
import { Divider, Button } from 'antd';
import { gql } from 'apollo-boost';

import UserEditModal from './UserEditModal';
import FilterForm from './FilterForm';
// import UserTable from './UserTable';
import QueryTable from '../../components/QueryTable';

export default class User extends Component {
  state = {
    editModalVisible: false,
    users: [],
    currUser: null
  };
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
      key: 'name'
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
        return (
          <Button.Group size="small">
            <Button
              type="primary"
              onClick={() => {
                this.onOpenEditModal(record);
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
  onOpenEditModal = currUser => {
    this.setState({
      editModalVisible: true,
      currUser
    });
  };
  onCloseEditModal = () => {
    this.setState({
      editModalVisible: false,
      currUser: null
    });
  };
  render() {
    const { editModalVisible, currUser } = this.state;
    return (
      <>
        <FilterForm onOpenEditModal={this.onOpenEditModal} />
        <Divider />
        <QueryTable cols={this.Cols} gql={USERS_QUERY} />

        {editModalVisible ? (
          <UserEditModal data={currUser} onCloseEditModal={this.onCloseEditModal} />
        ) : null}
      </>
    );
  }
}
export const USERS_QUERY = gql`
  query UsersQuery {
    userList {
      users {
        id
        name
        intro
        role
        avatar
        email
        nickname
      }
      total
    }
  }
`;
