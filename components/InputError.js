import React, {Component} from 'react';
import '../css/InputError.css';

class InputError extends Component {

  render() {
    if (this.props.errorVisible) {
      return(
        <p><span className="errorSpan">this.props.errorMessage</span></p>
      );
    }
    return(null);
  }
}

export default InputError;
