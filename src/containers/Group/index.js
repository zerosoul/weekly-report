import React, { Component } from 'react';
import { Divider, Button, Tag, Popconfirm, message } from 'antd';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

import GroupEditModal from './GroupEditModal';
import FilterForm from './FilterForm';
// import GroupTable from './GroupTable';
import QueryTable from '../../components/QueryTable';
import { ROLES } from '../../config/const';

export default class Group extends Component {
  state = {
    editModalVisible: false,
    variables: {},
    refetch: false,
    currGroup: null
  };
  Cols = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 50
    },
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name'
      // render: (val, record) => {
      //   return (
      //     <>
      //       <Tag color="pink">{val}</Tag>
      //       <Divider type="vertical" />
      //       <Tag>{record.nickname ? `${record.nickname}` : '暂无'}</Tag>
      //       <Divider type="vertical" />

      //       <Tag>{record.sex == 1 ? `男` : `女`}</Tag>
      //     </>
      //   );
      // }
    },
    {
      title: '简介',
      dataIndex: 'intro',
      key: 'intro',
      width: 400
    },
    // {
    //   title: '角色',
    //   dataIndex: 'role',
    //   key: 'role',
    //   render: role => {
    //     return ROLES[role] || '暂无角色';
    //   }
    // },
    // {
    //   title: '头像',
    //   dataIndex: 'avatar',
    //   key: 'avatar'
    // },
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
            <Mutation mutation={REMOVE_GROUP}>
              {(removeGroup, { data, error }) => {
                if (error) {
                  return message.error('操作失败');
                }
                return (
                  <Popconfirm
                    title="确定要删除吗?"
                    onConfirm={async () => {
                      const result = await removeGroup({ variables: { id } });
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
  onOpenEditModal = (currGroup = null) => {
    this.setState({
      editModalVisible: true,
      currGroup
    });
  };
  onCloseEditModal = (isRefreshList = true) => {
    this.setState({
      editModalVisible: false,
      currGroup: null
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
    const { editModalVisible, currGroup, refetch, variables } = this.state;
    return (
      <>
        <FilterForm onOpenEditModal={this.onOpenEditModal} updateVariables={this.updateVariables} />
        <Divider />
        <QueryTable
          pagination={true}
          updateVariables={this.updateVariables}
          variables={variables}
          cols={this.Cols}
          gql={GROUP_QUERY}
          refetch={refetch}
        />

        {editModalVisible ? (
          <GroupEditModal data={currGroup} onCloseEditModal={this.onCloseEditModal} />
        ) : null}
      </>
    );
  }
}
const GROUP_QUERY = gql`
  query GroupsQuery($skip: Int, $first: Int, $orderBy: String, $filter: GroupFilterInput) {
    resp: groupList(skip: $skip, first: $first, orderBy: $orderBy, filter: $filter) {
      list: groups {
        id
        name
        intro
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
const REMOVE_GROUP = gql`
  mutation RemoveGroup($id: ID!) {
    isRemoved: removeGroup(id: $id)
  }
`;
