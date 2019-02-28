import React, { Component } from 'react';
import { Modal, Form, Row, Col, Input, Divider, Button, Skeleton, Select, message } from 'antd';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

const { Item } = Form;
const { Option } = Select;
import { ROLES } from '../../config/const';
const UPSERT_GROUP = gql`
  mutation UpsertGroup($data: GroupInput!) {
    upsertGroup(data: $data) {
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
class GroupEditModal extends Component {
  render() {
    const {
      data,
      onCloseEditModal,
      form: { getFieldDecorator }
    } = this.props;
    console.log('item data', data);
    const { name = '', email, intro } = data || {};
    return (
      <Modal
        style={{ top: 10 }}
        title={data ? `更新组织` : `创建组织`}
        maskClosable={false}
        visible={true}
        onCancel={() => {
          console.log('refresh is');

          onCloseEditModal(false);
        }}
        footer={false}
      >
        <Mutation mutation={UPSERT_GROUP}>
          {(upsertGroup, { data, error, loading }) => {
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
                  const { form, data: currGroup, onCloseEditModal } = this.props;
                  form.validateFields(async (error, values) => {
                    if (!error) {
                      console.log('data form', values);
                      //   编辑
                      if (currGroup) {
                        values.id = currGroup.id;
                      }

                      await upsertGroup({ variables: { data: values } });
                      console.log('curr group', currGroup);

                      message.success(currGroup ? '更新成功！' : '新建成功！');

                      onCloseEditModal();
                    }
                  });
                }}
              >
                <Row>
                  <Col span={12}>
                    <Item label="名称" {...ColLayout}>
                      {getFieldDecorator('name', {
                        initialValue: name,
                        rules: [
                          {
                            required: true,
                            message: '名称不能为空'
                          }
                        ]
                      })(<Input placeholder="名称" />)}
                    </Item>
                  </Col>
                  <Col span={12}>
                    <Item label="邮箱" {...ColLayout}>
                      {getFieldDecorator('email', {
                        initialValue: email,
                        rules: [{ type: 'email', message: '邮箱格式有误' }]
                      })(<Input placeholder="部门邮箱" />)}
                    </Item>
                  </Col>
                  <Col span={12}>
                    <Item label="简介" {...ColLayout}>
                      {getFieldDecorator('intro', {
                        initialValue: intro
                      })(<Input.TextArea placeholder="组简介" />)}
                    </Item>
                  </Col>
                </Row>
                <Divider />
                <Button loading={loading} type="primary" htmlType="submit">
                  确定
                </Button>
                <Divider type="vertical" />
                <Button
                  onClick={() => {
                    onCloseEditModal(false);
                  }}
                >
                  取消
                </Button>
              </Form>
            );
          }}
        </Mutation>
      </Modal>
    );
  }
}
export default Form.create()(GroupEditModal);
