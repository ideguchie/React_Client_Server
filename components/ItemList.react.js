import React, {Component} from 'react';
import axios from 'axios';
import "../css/ItemList.css";
import ItemView from './ItemView.react.js';

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
     data: [],
    };
  }

  loadDataFromServer() {
    axios.get(this.props.dataFrom)
    .then((res) => {
      this.setState({
        data: res.data
      });
    })
    .catch((err) => {
     console.log(err);
    });
  }

  componentWillMount() {

   }

   componentDidMount() {
     this.loadDataFromServer();
     //setInterval(this.loadDataFromServer.bind(this), this.props.pollInterval);
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

  render() {
    var list = this.state.data.map(function(item){
      return(
        <ItemView
          source={require('../images/blank.JPG')}
          link={"https://www.w3schools.com/html/"}
          text={item.text}
          key={item._id}
          />
      );
    });

    return(
      <div className="ItemList-container">
        {list}
      </div>
    );
  }
}

export default ItemList;
