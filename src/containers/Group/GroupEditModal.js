import React, { Component } from 'react';
import { Modal, Form, Row, Col, Input } from 'antd';
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
class GroupEditModal extends Component {
  onSubmit = () => {
    // console.log('values', values);
    const { form, onClickEditBtn, data, onCloseEdit } = this.props;
    form.validateFields((error, values) => {
      if (!error) {
        //   编辑
        if (data) {
          values.id = data.id;
        }
        onClickEditBtn(values);
        onCloseEdit();
      }
    });
  };

  render() {
    const {
      data,
      onCloseEdit,
      form: { getFieldDecorator }
    } = this.props;
    console.log('item data', data);
    const { name = '', intro = '', parent = {} } = data || {};
    return (
      <Modal
        style={{ top: 10 }}
        title={data ? `编辑` : `新增`}
        maskClosable={false}
        visible={true}
        onCancel={onCloseEdit}
        onOk={this.onSubmit}
      >
        <Form autoComplete="disabled">
          <Row>
            <Col span={24}>
              <Item label="名称" {...ColLayout}>
                {getFieldDecorator('name', {
                  initialValue: name,
                  rules: [
                    {
                      required: true,
                      message: '名称不能为空'
                    }
                  ]
                })(<Input.TextArea placeholder="工作内容" />)}
              </Item>
            </Col>
            <Col span={24}>
              <Item label="简介" {...ColLayout}>
                {getFieldDecorator('intro', {
                  initialValue: intro
                })(<Input style={{ width: 80 }} placeholder="组简介" />)}
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
export default Form.create()(GroupEditModal);
