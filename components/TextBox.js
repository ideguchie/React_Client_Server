import React, {Component} from 'react';

class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmpty: true,
      value: null,
      valid: false,
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

    this.setState({
      value: value,
      isEmpty: this.state.value === "",
      valid: valid,
    });

  }

  render() {
    return(
      <div className={this.props.divClassName}>
        <input
          placeholder={this.props.placeholder}
          className={this.props.textClassName}
          onChange={this.handleChange}
          value={this.props.value} />
      </div>
    );
  }
}

export default TextBox;
