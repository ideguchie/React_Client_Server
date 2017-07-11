import React, {Component} from 'react';
import ActionButton from './ActionButton.js';
import axios from 'axios';

class ColumnBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryData: [],
    };
  }

  componentWillMount() {
    axios.get(this.props.url, {
      params: {
        fileName: "blank.JPG",
        who: "Dr.Who",
      }
    })
    .then((res) => {
      this.setState({
        queryData: res.data
      });
    });
  }

  render() {
    var imageSource = "";
    if(this.state.queryData.length === 1) {
      imageSource = this.state.queryData.map(function(item) {
        return item.url;
      });
    };

    return (
      <div className='columnbar-container'>
        <img src={imageSource} alt='profile' className='columnbar-image' />
        <ActionButton />
      </div>
    );
  }
}

export default ColumnBar;
