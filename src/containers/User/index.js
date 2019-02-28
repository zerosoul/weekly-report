import React, { Component } from 'react';
import { Divider, Button, Tag, Popconfirm, message } from 'antd';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

import UserEditModal from './UserEditModal';
import FilterForm from './FilterForm';
// import UserTable from './UserTable';
import QueryTable from '../../components/QueryTable';
import { ROLES } from '../../config/const';

export default class User extends Component {
  state = {
    editModalVisible: false,
    variables: {},
    refetch: false,
    currUser: null
  };
  Cols = [
    // {
    //   title: 'ID',
    //   dataIndex: 'id',
    //   key: 'id',
    //   width: 50
    // },
    {
      title: '姓名/昵称/性别',
      dataIndex: 'name',
      key: 'name',
      render: (val, record) => {
        return (
          <>
            <Tag color="pink">{val}</Tag>
            <Divider type="vertical" />
            <Tag>{record.nickname ? `${record.nickname}` : '暂无'}</Tag>
            <Divider type="vertical" />

            <Tag>{record.sex == 1 ? `男` : `女`}</Tag>
          </>
        );
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
      key: 'role',
      render: role => {
        return ROLES[role] || '暂无角色';
      }
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
                this.onOpenEditModal(record);
              }}
            >
              编辑
            </Button>
            <Mutation mutation={REMOVE_USER}>
              {(removeUser, { data, error }) => {
                if (error) {
                  return message.error('操作失败');
                }
                return (
                  <Popconfirm
                    title="确定要删除吗?"
                    onConfirm={async () => {
                      const result = await removeUser({ variables: { id } });
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
  onOpenEditModal = (currUser = null) => {
    this.setState({
      editModalVisible: true,
      currUser
    });
  };
  onCloseEditModal = (isRefreshList = true) => {
    this.setState({
      editModalVisible: false,
      currUser: null
    });
    console.log('refresh is', isRefreshList);

    if (isRefreshList) {
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
    }
  };
  updateVariables = (vars, isReset = false) => {
    const { variables } = this.state;
    this.setState({
      variables: isReset ? { ...vars } : { ...variables, ...vars }
    });
  };
  render() {
    const { editModalVisible, currUser, refetch, variables } = this.state;
    return (
      <>
        <FilterForm onOpenEditModal={this.onOpenEditModal} updateVariables={this.updateVariables} />
        <Divider />
        <QueryTable
          pagination={true}
          updateVariables={this.updateVariables}
          variables={variables}
          cols={this.Cols}
          gql={USERS_QUERY}
          refetch={refetch}
        />

        {editModalVisible ? (
          <UserEditModal data={currUser} onCloseEditModal={this.onCloseEditModal} />
        ) : null}
      </>
    );
  }
}
const USERS_QUERY = gql`
  query UsersQuery($skip: Int, $first: Int, $orderBy: String, $filter: UserFilterInput) {
    resp: userList(skip: $skip, first: $first, orderBy: $orderBy, filter: $filter) {
      list: users {
        id
        sex
        name
        intro
        role
        avatar
        email
        birthday
        nickname
        # group {
        #   id
        #   name
        # }
      }
      pageSize
      current
      total
    }
  }
`;
const REMOVE_USER = gql`
  mutation RemoveUser($id: ID!) {
    isRemoved: removeUser(id: $id)
  }
`;
