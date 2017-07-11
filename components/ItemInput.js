import React, {Component} from 'react';
import ItemForm from './ItemForm';
import axios from 'axios';
import '../css/ItemInput.css';

class ItemInput extends Component {
  constructor(props) {
    super(props);

    this.handleItemSubmit = this.handleItemSubmit.bind(this);
  }

  componentWillMount() {

   }

   componentDidMount() {

   }

   componentWillReceiveProps(newProps) {

   }

   shouldComponentUpdate(newProps, newState) {
      return true;
   }

   componentWillUpdate(nextProps, nextState) {

   }

   componentDidUpdate(prevProps, prevState) {

   }

   componentWillUnmount() {

   }

  handleItemSubmit(item) {
    let formData = new FormData();
    formData.append("coolImage", item.coolImage[0]);
    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    };
    axios.all([
      axios.post(this.props.url,
       {
         text: item.descriptiveMessage,
         folder: "folder_link"
       }
      ),
      axios.post('http://localhost:3000/upload',
        formData,
        config
      )
    ])
    .catch(res => {
      console.log(res);
    });
  }

  render () {
    return (
      <div className="iteminput">
        <ItemForm handleItemSubmit={this.handleItemSubmit} />
      </div>
    );
  }
}

export default ItemInput;
