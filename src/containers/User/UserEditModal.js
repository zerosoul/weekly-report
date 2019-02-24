import React, { Component } from 'react';
import { Modal, Form, Row, Col, Input } from 'antd';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

const { Item } = Form;

const ColLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 18
  }
};

// 包含新增和编辑
class UserEditModal extends Component {
  onSubmit = () => {
    // console.log('values', values);
    const { form, onClickEditBtn, data, onCloseEditModal } = this.props;
    form.validateFields((error, values) => {
      if (!error) {
        //   编辑
        if (data) {
          values.id = data.id;
        }
        onClickEditBtn(values);
        onCloseEditModal();
      }
    });
  };

  render() {
    const {
      data,
      onCloseEditModal,
      form: { getFieldDecorator }
    } = this.props;
    console.log('item data', data);
    const { name = '', intro = '', email, parent = {} } = data || {};
    return (
      <Modal
        style={{ top: 10 }}
        title={data ? `编辑` : `新增`}
        maskClosable={false}
        visible={true}
        onCancel={onCloseEditModal}
        onOk={this.onSubmit}
      >
        <Form autoComplete="disabled">
          <Row>
            <Col span={12}>
              <Item label="姓名" {...ColLayout}>
                {getFieldDecorator('name', {
                  initialValue: name,
                  rules: [
                    {
                      required: true,
                      message: '姓名不能为空'
                    }
                  ]
                })(<Input placeholder="姓名" />)}
              </Item>
            </Col>
            <Col span={12}>
              <Item label="昵称" {...ColLayout}>
                {getFieldDecorator('name', {
                  initialValue: name
                })(<Input placeholder="昵称" />)}
              </Item>
            </Col>
            <Col span={12}>
              <Item label="邮箱" {...ColLayout}>
                {getFieldDecorator('email', {
                  initialValue: email
                })(<Input placeholder="邮箱" />)}
              </Item>
            </Col>
            <Col span={24}>
              <Item label="简介" {...ColLayout}>
                {getFieldDecorator('intro', {
                  initialValue: intro
                })(<Input.TextArea placeholder="自我介绍" />)}
              </Item>
            </Col>
            {/* <Col span={24}>
              <Item label="备注" {...ColLayout}>
                {getFieldDecorator('remark', {
                  initialValue: remark
                })(<Input.TextArea placeholder="备注" />)}
              </Item>
            </Col> */}
          </Row>
        </Form>
      </Modal>
    );
  }
}
export default Form.create()(UserEditModal);
