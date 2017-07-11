import React, {Component} from 'react';
import ItemText from './ItemText.js'

class ItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptiveMessage: "",
      coolImage: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    var descriptiveMessage = this.state.descriptiveMessage.trim();
    var coolImage = this.state.coolImage;

    if (!descriptiveMessage) {
      return;
    }

    this.props.handleItemSubmit({descriptiveMessage: descriptiveMessage, coolImage: coolImage});
    this.setState({
      descriptiveMessage: "",
      coolImage: null,
    });
  }

  inputValidate(value) {
    return true;
  }

  setValue(field, event) {
    var object = {};
    object[field] = event.target.value;
    this.setState(object);
  }

  render () {
    return (
      <form className="itemForm" onSubmit={this.handleSubmit}>

        <ItemText
          value={this.state.descriptiveMessage}
          uniqueName="descriptiveMessage thing"
          text="Descriptive Message"
          textArea={false}
          required={true}
          minCharacters={3}
          validate={this.inputValidate}
          onChange={this.setValue.bind(this, 'descriptiveMessage')}
          errorMessage="Text is invalid"
          emptyMessage="Text is required" />

        <input className="fileIn" type="file" value="fury" onChange={this.setValue.bind(this, 'change_thing')} />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ItemForm;
