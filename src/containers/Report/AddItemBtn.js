import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import styled from 'styled-components';

const AddWrapper = styled.section`
  margin: 10px auto 20px auto;
  text-align: center;
`;
export default class AddItem extends Component {
  render() {
    const { onOpenEditModal } = this.props;
    return (
      <AddWrapper>
        <Button type="primary" shape="circle" icon="plus" onClick={onOpenEditModal} />
      </AddWrapper>
    );
  }
}
