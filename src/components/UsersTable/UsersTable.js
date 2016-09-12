import React, { Component, PropTypes } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

class UsersTable extends Component {
  render() {
    const { users } = this.props;

    if (!users.length) {
      return (
        <Table selectable={false}>
          <TableBody selectable={false}>
            <TableRow><TableRowColumn>No data</TableRowColumn></TableRow>
          </TableBody>
        </Table>
      );
    }

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Login</TableHeaderColumn>
            <TableHeaderColumn>URL</TableHeaderColumn>
            <TableHeaderColumn>Avatar</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map(user =>
            <TableRow key={user.id}>
              <TableRowColumn>{user.login}</TableRowColumn>
              <TableRowColumn>
                <a href={user.html_url} alt={user.login}>
                  {user.html_url}
                </a>
              </TableRowColumn>
              <TableRowColumn>
                <a href={user.html_url} alt={user.login}>
                  <img
                    className="img-circle small-square-100"
                    src={user.avatar_url}
                    alt={user.login}
                  />
                </a>
              </TableRowColumn>
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
  }
}

UsersTable.defaultProps = {
  users: []
};

UsersTable.propTypes = {
  users: PropTypes.array
};

export default UsersTable;
