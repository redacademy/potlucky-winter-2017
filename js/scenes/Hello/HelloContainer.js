import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Hello from './Hello';

class HelloContainer extends Component {

  static propTypes = {

  };

  static route = {
    navigationBar: {
      title: 'HelloContainer.js Title',
    },
  };

  componentWillMount() {

  }

  render() {
    return (
		<Hello />
    );
  }
}

const mapDispatchToProps = dispatch => ({

});

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(HelloContainer);