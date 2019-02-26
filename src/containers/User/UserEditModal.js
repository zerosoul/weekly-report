import React, { Component } from 'react';
import { Modal, Form, Row, Col, Input, Divider, Button, Skeleton } from 'antd';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

const { Item } = Form;

const UPSERT_USER = gql`
  mutation UpsertUser($data: UserInput!) {
    upsertUser(data: $data) {
      id
      name
    }
  }
`;
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
    const { name = '', nickname = '', intro = '', email, parent = {} } = data || {};
    return (
      <Modal
        style={{ top: 10 }}
        title={data ? `编辑` : `新增`}
        maskClosable={false}
        visible={true}
        onCancel={onCloseEditModal}
        footer={false}
      >
        <Mutation mutation={UPSERT_USER}>
          {(upsertUser, { data, error, loading }) => {
            if (loading) {
              return <Skeleton active />;
            }
            if (error) {
              return <div>出错啦！</div>;
            }
            return (
              <Form
                autoComplete="disabled"
                onSubmit={evt => {
                  evt.preventDefault();
                  const { form, data: currUser, onCloseEditModal } = this.props;
                  form.validateFields(async (error, values) => {
                    if (!error) {
                      console.log('data form', values);
                      //   编辑
                      if (currUser) {
                        values.id = currUser.id;
                      }
                      const user = await upsertUser({ variables: { data: values } });
                      console.log('user return', user);

                      onCloseEditModal();
                    }
                  });
                }}
              >
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
                      {getFieldDecorator('nickname', {
                        initialValue: nickname
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
                </Row>
                <Divider />
                <Button loading={loading} type="primary" htmlType="submit">
                  确定
                </Button>
                <Divider type="vertical" />
                <Button onClick={onCloseEditModal}>取消</Button>
              </Form>
            );
          }}
        </Mutation>
      </Modal>
    );
  }
}
export default Form.create()(UserEditModal);
