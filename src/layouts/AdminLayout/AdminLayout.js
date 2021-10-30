import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
import Topbar from "../components/Topbar";

import 'bootstrap/dist/css/bootstrap.min.css';

class AdminLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const {children} = this.props;
    return (
        <Fragment>
          <Topbar/>
        <main>
          {children}
        </main>
        </Fragment>
    );
  }
}

export default AdminLayout;
