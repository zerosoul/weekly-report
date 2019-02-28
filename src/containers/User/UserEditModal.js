import React, { Component } from 'react';
import {
  Modal,
  Form,
  Row,
  Col,
  Input,
  Divider,
  Button,
  Skeleton,
  Select,
  DatePicker,
  message
} from 'antd';
import { Mutation, Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const { Item } = Form;
const { Option } = Select;
import { ROLES } from '../../config/const';
import moment from 'moment';
const UPSERT_USER = gql`
  mutation UpsertUser($data: UserInput!) {
    upsertUser(data: $data) {
      id
      name
    }
  }
`;
const GROUP_QUERY = gql`
  query GroupsQuery($first: Int) {
    resp: groupList(first: $first) {
      list: groups {
        id
        name
      }
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
  render() {
    const {
      data,
      onCloseEditModal,
      form: { getFieldDecorator }
    } = this.props;
    console.log('item data', data);
    const {
      name = '',
      nickname = '',
      birthday,
      intro = '',
      sex = 1,
      role = 'STAFF',
      email,
      group = {}
    } = data || {};
    const { id: groupId } = group ? group : {};
    return (
      <Modal
        style={{ top: 10 }}
        title={data ? `更新用户` : `创建用户`}
        maskClosable={false}
        visible={true}
        onCancel={() => {
          console.log('refresh is');

          onCloseEditModal(false);
        }}
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
                      values.birthday = values.birthday
                        ? values.birthday.format('YYYY-MM-DD')
                        : null;
                      // values.group = values.group ? { id: values.group } : undefined;
                      // delete values.group;
                      await upsertUser({ variables: { data: values } });
                      console.log('curr user', currUser);

                      message.success(currUser ? '更新成功！' : '新建成功！');

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
                        initialValue: email,
                        rules: [
                          { type: 'email', message: '邮箱格式有误' },
                          {
                            required: true,
                            message: '邮箱不能为空'
                          }
                        ]
                      })(<Input placeholder="邮箱" />)}
                    </Item>
                  </Col>
                  <Col span={12}>
                    <Item label="生日" {...ColLayout}>
                      {getFieldDecorator('birthday', {
                        initialValue: birthday ? moment(birthday, 'YYYY-MM-DD') : undefined
                      })(<DatePicker placeholder="请选择日期" format={`YYYY-MM-DD`} />)}
                    </Item>
                  </Col>
                  <Col span={12}>
                    <Item label="性别" {...ColLayout}>
                      {getFieldDecorator('sex', {
                        initialValue: sex
                      })(
                        <Select>
                          <Option value={1}>男</Option>
                          <Option value={2}>女</Option>
                        </Select>
                      )}
                    </Item>
                  </Col>
                  <Col span={12}>
                    <Item label="角色" {...ColLayout}>
                      {getFieldDecorator('role', {
                        initialValue: role
                      })(
                        <Select>
                          {Object.entries(ROLES).map(role => (
                            <Option key={role[0]} value={role[0]}>
                              {role[1]}
                            </Option>
                          ))}
                        </Select>
                      )}
                    </Item>
                  </Col>
                  <Col span={12}>
                    <Query query={GROUP_QUERY} variables={{ first: 100 }}>
                      {({ data, error, loading }) => {
                        if (error) {
                          return <div>出错啦~~~</div>;
                        }
                        if (loading) {
                          return <div>加载中...</div>;
                        }
                        return (
                          <Item label="所属部门" {...ColLayout}>
                            {getFieldDecorator('group', {
                              initialValue: groupId
                            })(
                              <Select>
                                {data.resp.list.map(group => (
                                  <Option key={group.id} value={group.id}>
                                    {group.name}
                                  </Option>
                                ))}
                              </Select>
                            )}
                          </Item>
                        );
                      }}
                    </Query>
                  </Col>
                  <Col span={12}>
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
export default Form.create()(UserEditModal);
