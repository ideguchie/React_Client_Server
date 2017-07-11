import React, {Component} from 'react';
import InputError from './InputError';

class ItemText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmpty: true,
      value: null,
      valid: false,
      errorMessage: "Input is invalid",
      errorVisible: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.validation(event.target.value);

    if(this.props.onChange) {
      this.props.onChange(event);
    }
  }

  validation(value, valid) {
    if (typeof valid === 'undefined') {
      valid = true;
    }

    var message = "";
    var errorVisible = false;

    if (!valid) {
      message = this.props.errorMessage;
      valid = false;
      errorVisible = true;
    }
    else if (this.props.required && this.state.value === "") {
      message = this.props.emptyMessage;
      valid = false;
      errorVisible = true;
    }
    else if (value.length < this.props.minCharacters) {
      message = this.props.errorMessage;
      valid = false;
      errorVisible = true;
    }

    this.setState({
      value: value,
      isEmpty: this.state.value === "",
      valid: valid,
      errorMessage: message,
      errorVisible: errorVisible
    });

  }

  handleBlur(event) {
    var valid = this.props.validate(event.target.value);
    this.validation(event.target.value, valid);
  }

  render() {
    if (this.props.textArea) {
      return (
        <div className={this.props.uniqueName}>
          <textarea
            placeholder={this.props.text}
            className={this.props.uniqueName}
            onChange={this.handleChange}
            //onBlur={this.handleBlur}
            value={this.props.value} />

          <InputError
            visible={this.state.errorVisible}
            errorMessage={this.state.errorMessage} />
        </div>
      );
    } else {
      return (
        <div className={this.props.uniqueName}>
          <input
            placeholder={this.props.text}
            className={this.props.uniqueName}
            onChange={this.handleChange}
            //onBlur={this.handleBlur}
            value={this.props.value} />

          <InputError
            visible={this.state.errorVisible}
            errorMessage={this.state.errorMessage} />
        </div>
      );
    }
  }
}

export default ItemText;
