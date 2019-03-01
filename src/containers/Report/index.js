import React, { Component } from 'react';
import { Divider, Button } from 'antd';
import styled from 'styled-components';
import AddItem from './AddItemBtn';
import ReportTitle from './Title';
import EditItemModal from './EditItemModal';
import ReportTable from './ReportTable';
const TableWrapper = styled.section`
  padding: 10px 5px;
  /* border-top: 1px dashed red;
  border-bottom: 1px dashed red; */
`;
const Items = [
  {
    id: 123,
    content: '哄宝神器优化',
    progress: '20%',
    remark: '红包备注',
    type: 'done'
  },
  {
    id: 223,
    content: '哄宝神器优化',
    progress: '40%',
    remark: '红包wwww备注',
    type: 'todo'
  }
];
const separateItems = items => {
  return {
    dones: items.filter(item => item.type === 'done') || [],
    todos: items.filter(item => item.type === 'todo') || []
  };
};
export default class Report extends Component {
  state = {
    editModalVisible: false,
    currItem: null,
    editType: 'done',
    dones: [],
    todos: []
  };
  componentDidMount() {
    console.log('this.props', this.props.match);
    const { id } = this.props.match.params;
    if (+id) {
      console.log('更新');
    } else {
      console.log('新建');
    }
    const { dones, todos } = separateItems(Items);
    this.setState({
      dones,
      todos
    });
  }
  // 编辑某一项，包含新建
  onClickEditBtn = obj => {
    console.log('clicked edit', obj);
    const { dones: oldDones, todos: oldTodos } = this.state;
    const allItems = [...oldDones, ...oldTodos];
    if (obj.id) {
      let findIndex = allItems.findIndex(item => item.id == obj.id);
      allItems[findIndex] = obj;
    } else {
      allItems.push(obj);
    }
    const { dones, todos } = separateItems(allItems);
    this.setState({
      dones,
      todos
    });
  };
  // 打开编辑弹窗
  onOpenEditModal = (id, editType = 'done') => {
    const { todos, dones } = this.state;
    const allItems = [...todos, ...dones];
    const currItem = (id && allItems.find(item => item.id == id)) || null;
    console.log('clicked', id, currItem);
    this.setState({
      editModalVisible: true,
      editType,
      currItem
    });
  };
  // 关闭编辑弹窗
  onCloseEdit = () => {
    this.setState({
      editModalVisible: false,
      currItem: null
    });
  };

  render() {
    const { dones, todos, editModalVisible, currItem, editType } = this.state;
    return (
      <>
        <ReportTitle>周报(2019.02.04-2019.03.23)-前端-赵帅</ReportTitle>
        <TableWrapper>
          <ReportTitle>👇这周做啥了👇</ReportTitle>

          <ReportTable data={dones} onOpenEditModal={this.onOpenEditModal} />
          <AddItem onOpenEditModal={this.onOpenEditModal} />
        </TableWrapper>
        <Divider />
        <TableWrapper>
          <ReportTitle>👇下周准备做啥👇</ReportTitle>

          <ReportTable data={todos} type="todo" onOpenEditModal={this.onOpenEditModal} />
          <AddItem
            onOpenEditModal={() => {
              this.onOpenEditModal(null, 'todo');
            }}
          />
        </TableWrapper>
        {editModalVisible ? (
          <EditItemModal
            editType={editType}
            data={currItem}
            onClickEditBtn={this.onClickEditBtn}
            onCloseEdit={this.onCloseEdit}
          />
        ) : null}
      </>
    );
  }
}
