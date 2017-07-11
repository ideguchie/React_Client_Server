import React, {Component} from 'react';
import "../css/ItemView.css";

class ItemView extends Component {

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

  render() {
    return (
      <div className="ItemView-container">
        <img src={this.props.source} alt={"Error"} className="ItemView-image" />
        <a href={this.props.link} className="ItemView-link"><b>Link</b></a>
        <p className="ItemView-text1">{this.props.text}</p>
      </div>
    );
  }
}

export default ItemView;
