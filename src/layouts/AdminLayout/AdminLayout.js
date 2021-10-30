import { Component } from 'react';
import PropTypes
  from "prop-types";

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
        <main>
          {children}
        </main>
    );
  }
}

export default AdminLayout;
