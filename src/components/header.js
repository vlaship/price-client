import React from 'react';

export default class Header extends React.Component {

  state = {
    lastUpdate: 'never'
  }

  onClickUpdate = () => {

  }

  render = () =>
    <div className="header d-flex">
      <h3>
        <a href="http://pila.by" target="_blank">
          pila.by
        </a>
      </h3>

      <button
        onClick={this.onClickUpdate}
        className="btn btn-primary btn-sm">
        Обновить {this.state.lastUpdate}
      </button>
    </div>;
};
