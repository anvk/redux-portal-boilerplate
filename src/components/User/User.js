import React, { Component, PropTypes } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardText
} from 'material-ui/Card';

class User extends Component {
  render() {
    return (
      <Card>
        <CardHeader
          title={this.props.name}
          subtitle={this.props.email}
          avatar={this.props.avatar_url}
        />
        <CardTitle
          title={this.props.login}
          subtitle="* This data is pulled when UserInfo is loaded for the first time1"
        />
        <CardText>
          A boilerplate to create a portal website using
          Redux & Bootstrap & Redux Dev Tools Extension.
        </CardText>
      </Card>
    );
  }
}

User.propTypes = {
  login: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
  avatar_url: PropTypes.string,
  location: PropTypes.string,
  email: PropTypes.string,
  isFetching: PropTypes.bool,
  loaded: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

export default User;
