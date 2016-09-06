import React, { Component, PropTypes } from 'react';
import LaddaButton from 'react-ladda';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

class Repos extends Component {
  render() {
    const { repos } = this.props;

    return (
      <div>
        <div className="page-header">
          <h1>Repos</h1>
        </div>

        <div className="row">
          <em>
            * This data is pulled from server upon request
          </em>
        </div>

        <br />

        <div className="row">
          <div className="col-md-2">
            <p className="lead">
              GitHub <strong>{this.props.username}</strong> Repos
            </p>
          </div>
          <div className="col-md-2">
            <LaddaButton
              buttonStyle="expand-left"
              className="btn btn-lg btn-primary btn-block"
              loading={this.props.isFetching}
              disabled={this.props.isFetching}
              onClick={this.props.onSearch}
            >
              Refresh
            </LaddaButton>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Table className="table table-striped">
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn>Name</TableHeaderColumn>
                  <TableHeaderColumn>Description</TableHeaderColumn>
                  <TableHeaderColumn>URL</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody showRowHover="true">
                {repos.map(repo =>
                  <TableRow key={repo.id}>
                    <TableRowColumn>{repo.name}</TableRowColumn>
                    <TableRowColumn>{repo.description}</TableRowColumn>
                    <TableRowColumn>
                      <a href={repo.html_url} alt={repo.description}>
                        {repo.html_url}
                      </a>
                    </TableRowColumn>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

Repos.defaultProps = {
  repos: [],
  isFetching: false,
  username: undefined
};

Repos.propTypes = {
  repos: PropTypes.array,
  isFetching: PropTypes.bool,
  username: PropTypes.string,
  onSearch: PropTypes.func.isRequired
};

export default Repos;
