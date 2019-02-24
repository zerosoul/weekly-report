import React, { PureComponent } from 'react';
import { Button, Input, Form, Divider } from 'antd';
// import { purifyValues } from '@/utils';

const { Item } = Form;
class FormItems extends PureComponent {
  // 表单提交
  handleFormSubmit = evt => {
    evt.preventDefault();
    const { updateRetriveValues, handleSubmit, form } = this.props;

    form.validateFields((err, values) => {
      if (!err) {
        updateRetriveValues(values);

        handleSubmit(values);
      }
    });
  };
  render() {
    const { form, resetRetriveValues, handleSubmit, onOpenEditModal } = this.props;

    return (
      <>
        <Form layout="inline" onSubmit={this.handleFormSubmit}>
          <Item>{form.getFieldDecorator('name')(<Input placeholder="姓名" />)}</Item>

          <Item>
            <Button.Group>
              <Button type="primary" icon="search" htmlType="submit">
                查询
              </Button>
              <Button
                icon="sync"
                onClick={() => {
                  form.resetFields();
                  resetRetriveValues();
                  handleSubmit();
                }}
              >
                重置
              </Button>
            </Button.Group>
          </Item>
          <Item style={{ float: 'right' }}>
            <Button type="primary" icon="plus" onClick={onOpenEditModal}>
              新建
            </Button>
          </Item>
        </Form>
      </>
    );
  }
}
const FilterForm = Form.create()(FormItems);
export default FilterForm;
