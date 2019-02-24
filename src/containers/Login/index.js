import React, { Component } from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

import LoginForm from './LoginForm';
import Footer from '../../components/Footer';
const { Header, Content } = Layout;

const FormWrapper = styled.section`
    max-width: 250px;
    margin: 30px auto;
    padding: 20px 30px;
    border: 1px solid #ddd;
    border-radius: 15px;
    background: #ddd;
}
`;
export default class Login extends Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header>Header</Header>
        <Content>
          <FormWrapper>
            <LoginForm />
          </FormWrapper>
        </Content>
        <Footer />
      </Layout>
    );
  }
}
