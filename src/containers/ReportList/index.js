import React, { Component } from 'react';
import { Divider } from 'antd';
import ReportTable from './ReportTable';
import FilterForm from './FilterForm';

export default class ReportList extends Component {
  render() {
    return (
      <>
        <FilterForm />
        <Divider />
        <ReportTable />
      </>
    );
  }
}
