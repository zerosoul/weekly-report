import React, { Component } from 'react';
import { Divider } from 'antd';

import GroupEditModal from './GroupEditModal';
import FilterForm from './FilterForm';
import GroupTable from './GroupTable';

export default class Group extends Component {
  state = {
    editModalVisible: false
  };
  render() {
    const { editModalVisible } = this.state;
    return (
      <>
        <FilterForm />
        <Divider />
        <GroupTable />
        {editModalVisible ? <GroupEditModal /> : null}
      </>
    );
  }
}
