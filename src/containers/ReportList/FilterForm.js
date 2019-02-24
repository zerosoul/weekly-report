import React, { PureComponent } from 'react';
import { Button, Input, Form } from 'antd';
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
    const { form, resetRetriveValues, handleSubmit } = this.props;

    return (
      <Form layout="inline" onSubmit={this.handleFormSubmit}>
        <Item>{form.getFieldDecorator('title')(<Input placeholder="周报标题" />)}</Item>

        <Item>
          <Button type="primary" icon="search" htmlType="submit">
            查询
          </Button>
        </Item>
        <Item>
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
        </Item>
      </Form>
    );
  }
}
const FilterForm = Form.create()(FormItems);
export default FilterForm;
