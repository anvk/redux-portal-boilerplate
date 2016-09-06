import React, { Component, PropTypes } from 'react';

class Misc extends Component {
  render() {
    const { emojis, gitignoreTemplates } = this.props;

    return (
      <div>
        <div className="page-header">
          <h1>GitHub Miscellaneous</h1>
        </div>

        <div className="row">
          <em>
            * This data was loaded right away with the portal even before user loggedin
          </em>
        </div>

        <br />

        <div className="row">
          <div className="col-md-4">
            <p className="lead">
              GitHub Ignore Templates
            </p>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Template</th>
                </tr>
              </thead>
              <tbody>
                {gitignoreTemplates.map((gitignoreTemplate, index) =>
                  <tr key={gitignoreTemplate}>
                    <th scope="row">{index + 1}</th>
                    <td>{gitignoreTemplate}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="col-md-4">
            <p className="lead">
              GitHub Emojis
            </p>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Text</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                {emojis.map((emoji, index) =>
                  <tr key={emoji.emojiText}>
                    <th scope="row">{index + 1}</th>
                    <td>{emoji.emojiText}</td>
                    <td>
                      <img
                        className="img-responsive img-rounded small-square-100"
                        src={emoji.emojiImage}
                        alt={emoji.emojiText}
                      />
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

Misc.defaultProps = {
  emojis: [],
  gitignoreTemplates: []
};

Misc.propTypes = {
  emojis: PropTypes.array,
  gitignoreTemplates: PropTypes.array
};

export default Misc;
