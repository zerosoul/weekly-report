import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tag } from 'antd';

export default class Post extends Component {
  render() {
    let { id, title, content } = this.props.post;
    if (this.props.isDraft) {
      title = `${title} (Draft)`;
    }

    return (
      <Link className="no-underline ma1" to={`/post/${id}`}>
        <Tag>{title}</Tag>
        <p className="black-80 fw3">{content}</p>
      </Link>
    );
  }
}
