import React, { Component } from 'react';
import { Divider, Button, Tag, Popconfirm, message } from 'antd';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

import FilterForm from './FilterForm';
// import ReportTable from './ReportTable';
import QueryTable from '../../components/QueryTable';

export default class Report extends Component {
  state = {
    editModalVisible: false,
    variables: {},
    refetch: false,
    currReport: null
  };
  Cols = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: '操作',
      dataIndex: 'opt',
      key: 'opt',
      width: 200,
      render: (txt, record) => {
        // console.log('record', record);
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
            <Mutation mutation={REMOVE_REPORT}>
              {(removeReport, { data, error }) => {
                if (error) {
                  return message.error('操作失败');
                }
                return (
                  <Popconfirm
                    title="确定要删除吗?"
                    onConfirm={async () => {
                      const result = await removeReport({ variables: { id } });
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
  onOpenEditModal = (currReport = null) => {
    this.setState({
      editModalVisible: true,
      currReport
    });
  };
  onCloseEditModal = (isRefreshList = true) => {
    this.setState({
      editModalVisible: false,
      currReport: null
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
    const { editModalVisible, currReport, refetch, variables } = this.state;
    return (
      <>
        <FilterForm onOpenEditModal={this.onOpenEditModal} updateVariables={this.updateVariables} />
        <Divider />
        <QueryTable
          pagination={true}
          updateVariables={this.updateVariables}
          variables={variables}
          cols={this.Cols}
          gql={REPORTS_QUERY}
          refetch={refetch}
        />
      </>
    );
  }
}
const REPORTS_QUERY = gql`
  query ReportsQuery($skip: Int, $first: Int, $orderBy: String, $filter: ReportFilterInput) {
    resp: reportList(skip: $skip, first: $first, orderBy: $orderBy, filter: $filter) {
      list: reports {
        id
        title
      }
      pageSize
      current
      total
    }
  }
`;
const REMOVE_REPORT = gql`
  mutation RemoveReport($id: ID!) {
    isRemoved: removeReport(id: $id)
  }
`;
