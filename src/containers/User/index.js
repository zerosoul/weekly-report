import React, { Component } from 'react';
import { Divider } from 'antd';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import UserEditModal from './UserEditModal';
import FilterForm from './FilterForm';
import UserTable from './UserTable';

const Users = [
  {
    id: 124,
    name: '张三',
    nickname: '喔喔',
    intro: '张三张安我最强！'
  },
  {
    id: 1242,
    name: '张三2',
    nickname: '喔喔',
    intro: '张三442张安我最强！'
  },
  {
    id: 1224,
    name: '张三111',
    nickname: '121',
    email: 'ygd@df.com',
    intro: '张三33张安我最强！'
  }
];

export default class User extends Component {
  state = {
    editModalVisible: false,
    users: [],
    currUser: null
  };
  onOpenEditModal = id => {
    const { users } = this.state;
    const currUser = users.find(user => user.id == id) || null;
    this.setState({
      editModalVisible: true,
      currUser
    });
  };
  onCloseEditModal = () => {
    this.setState({
      editModalVisible: false,
      currUser: null
    });
  };
  componentDidMount() {
    this.setState({ users: Users });
  }
  render() {
    const { editModalVisible, users } = this.state;
    return (
      <>
        <FilterForm onOpenEditModal={this.onOpenEditModal} />
        <Divider />
        <Query query={USERS_QUERY}>
          {({ data, loading, error, refetch }) => {
            if (error) {
              return <div>An unexpected error occured.</div>;
            }
            return (
              <UserTable
                loading={loading}
                data={data.users}
                onOpenEditModal={this.onOpenEditModal}
              />
            );
          }}
        </Query>
        {editModalVisible ? <UserEditModal onCloseEditModal={this.onCloseEditModal} /> : null}
      </>
    );
  }
}
{
  /* <>
  <h1>Feed</h1>
  {data.feed &&
    data.feed.map(post => (
      <Post
        key={post.id}
        post={post}
        refresh={() => refetch()}
        isDraft={!post.published}
      />
    ))}
  {this.props.children}
</> */
}
export const USERS_QUERY = gql`
  query UsersQuery {
    users {
      id
      name
      intro
      role
      avatar
      email
      nickname
    }
  }
`;
