import React, { PureComponent } from 'react';
import { Button, Input, Form, Divider } from 'antd';

const { Item } = Form;
class FormItems extends PureComponent {
  // 表单提交
  handleFormSubmit = evt => {
    evt.preventDefault();
    const { updateVariables, form } = this.props;

    form.validateFields((err, values) => {
      if (!err) {
        let vals = {};
        Object.entries(values).map(val => {
          vals[`${val[0]}_contains`] = val[1];
        });
        console.log('form sub', { filter: vals });
        updateVariables({ filter: vals }, true);
      }
    });
  };
  render() {
    const { form, updateVariables, onOpenEditModal } = this.props;

    return (
      <Form layout="inline" onSubmit={this.handleFormSubmit}>
        <Item>{form.getFieldDecorator('title')(<Input placeholder="标题" />)}</Item>

        <Item>
          <Button.Group>
            <Button type="primary" icon="search" htmlType="submit">
              查询
            </Button>
            <Button
              icon="sync"
              onClick={() => {
                form.resetFields();
                updateVariables({}, true);
              }}
            >
              重置
            </Button>
          </Button.Group>
        </Item>
        <Item style={{ float: 'right' }}>
          <Button type="primary" icon="plus" href={`/report/`}>
            新建
          </Button>
        </Item>
      </Form>
    );
  }
}
const FilterForm = Form.create()(FormItems);
export default FilterForm;
